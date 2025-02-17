//! Iterators over [`Frame`]s.

use core::{fmt, fmt::Formatter, iter::FusedIterator, marker::PhantomData};

use crate::{Frame, Report};

/// Iterator over the [`Frame`] stack of a [`Report`].
///
/// Use [`Report::frames()`] to create this iterator.
#[must_use]
#[derive(Clone)]
pub struct Frames<'r> {
    current: Option<&'r Frame>,
}

impl<'r> Frames<'r> {
    pub(crate) const fn new<C>(report: &'r Report<C>) -> Self {
        Self {
            current: Some(report.frame()),
        }
    }
}

impl<'r> Iterator for Frames<'r> {
    type Item = &'r Frame;

    fn next(&mut self) -> Option<Self::Item> {
        self.current.take().map(|current| {
            if let Some(source) = current.source() {
                self.current = Some(source);
            }
            current
        })
    }
}

impl<'r> FusedIterator for Frames<'r> {}

impl fmt::Debug for Frames<'_> {
    fn fmt(&self, fmt: &mut Formatter<'_>) -> fmt::Result {
        fmt.debug_list().entries(self.clone()).finish()
    }
}

/// Iterator over the mutable [`Frame`] stack of a [`Report`].
///
/// Use [`Report::frames_mut()`] to create this iterator.
#[must_use]
pub struct FramesMut<'r> {
    current: Option<*mut Frame>,
    _marker: PhantomData<&'r mut Frame>,
}

impl<'r> FramesMut<'r> {
    pub(crate) fn new<C>(report: &'r mut Report<C>) -> Self {
        Self {
            current: Some(report.frame_mut()),
            _marker: PhantomData,
        }
    }
}

impl<'r> Iterator for FramesMut<'r> {
    type Item = &'r mut Frame;

    fn next(&mut self) -> Option<Self::Item> {
        let current = self.current.take()?;
        // SAFETY: We require a mutable reference to `Report` to create `FramesMut` to get a mutable
        //   reference to `Frame`. The borrow checker is unable to prove that subsequent calls to
        //   `next()` won't access the same data.
        //   NB: It's almost never possible to implement a mutable iterator without `unsafe`.
        unsafe {
            if let Some(source) = (*current).source_mut() {
                self.current = Some(source);
            }
            Some(&mut *current)
        }
    }
}

impl<'r> FusedIterator for FramesMut<'r> {}

/// Iterator over requested references in the [`Frame`] stack of a [`Report`].
///
/// Use [`Report::request_ref()`] to create this iterator.
#[must_use]
#[cfg(nightly)]
pub struct RequestRef<'r, T: ?Sized> {
    frames: Frames<'r>,
    _marker: PhantomData<&'r T>,
}

#[cfg(nightly)]
impl<'r, T: ?Sized> RequestRef<'r, T> {
    pub(super) const fn new<Context>(report: &'r Report<Context>) -> Self {
        Self {
            frames: report.frames(),
            _marker: PhantomData,
        }
    }
}

#[cfg(nightly)]
impl<'r, T> Iterator for RequestRef<'r, T>
where
    T: ?Sized + 'static,
{
    type Item = &'r T;

    fn next(&mut self) -> Option<Self::Item> {
        self.frames.by_ref().find_map(Frame::request_ref)
    }
}

#[cfg(nightly)]
impl<'r, T> FusedIterator for RequestRef<'r, T> where T: ?Sized + 'static {}

#[cfg(nightly)]
impl<T: ?Sized> Clone for RequestRef<'_, T> {
    fn clone(&self) -> Self {
        Self {
            frames: self.frames.clone(),
            _marker: PhantomData,
        }
    }
}

#[cfg(nightly)]
impl<'r, T> fmt::Debug for RequestRef<'r, T>
where
    T: ?Sized + fmt::Debug + 'static,
{
    fn fmt(&self, fmt: &mut Formatter<'_>) -> fmt::Result {
        fmt.debug_list().entries(self.clone()).finish()
    }
}

/// Iterator over requested values in the [`Frame`] stack of a [`Report`].
///
/// Use [`Report::request_value()`] to create this iterator.
#[must_use]
#[cfg(nightly)]
pub struct RequestValue<'r, T> {
    frames: Frames<'r>,
    _marker: PhantomData<T>,
}

#[cfg(nightly)]
impl<'r, T> RequestValue<'r, T> {
    pub(super) const fn new<Context>(report: &'r Report<Context>) -> Self {
        Self {
            frames: report.frames(),
            _marker: PhantomData,
        }
    }
}

#[cfg(nightly)]
impl<'r, T> Iterator for RequestValue<'r, T>
where
    T: 'static,
{
    type Item = T;

    fn next(&mut self) -> Option<Self::Item> {
        self.frames.find_map(Frame::request_value)
    }
}

#[cfg(nightly)]
impl<'r, T> FusedIterator for RequestValue<'r, T> where T: 'static {}

#[cfg(nightly)]
impl<T> Clone for RequestValue<'_, T> {
    fn clone(&self) -> Self {
        Self {
            frames: self.frames.clone(),
            _marker: PhantomData,
        }
    }
}

#[cfg(nightly)]
impl<'r, T> fmt::Debug for RequestValue<'r, T>
where
    T: fmt::Debug + 'static,
{
    fn fmt(&self, fmt: &mut Formatter<'_>) -> fmt::Result {
        fmt.debug_list().entries(self.clone()).finish()
    }
}
