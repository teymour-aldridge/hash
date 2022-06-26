import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const GithubIcon: FC<SvgIconProps> = ({ sx = [], ...props }) => {
  return (
    <SvgIcon
      sx={[
        {
          width: "1em",
          height: "1em",
          fontSize: 20,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M6.75781 15.5469C6.75781 15.625 6.67969 15.6641 6.5625 15.6641C6.44531 15.7031 6.36719 15.625 6.36719 15.5469C6.36719 15.4688 6.44531 15.3906 6.5625 15.3906C6.67969 15.3906 6.75781 15.4688 6.75781 15.5469ZM5.54688 15.3516C5.54688 15.4297 5.625 15.5469 5.74219 15.5469C5.82031 15.5859 5.9375 15.5469 5.97656 15.4688C5.97656 15.3906 5.9375 15.3125 5.82031 15.2734C5.70312 15.2344 5.58594 15.2734 5.54688 15.3516ZM7.30469 15.3125C7.1875 15.3125 7.10938 15.3906 7.10938 15.5078C7.10938 15.5859 7.22656 15.625 7.34375 15.5859C7.46094 15.5469 7.53906 15.5078 7.5 15.4297C7.5 15.3516 7.38281 15.2734 7.30469 15.3125ZM9.84375 0.3125C4.45312 0.3125 0.3125 4.45312 0.3125 9.84375C0.3125 14.1797 3.00781 17.8906 6.91406 19.2188C7.42188 19.2969 7.57812 18.9844 7.57812 18.75C7.57812 18.4766 7.57812 17.1484 7.57812 16.3281C7.57812 16.3281 4.84375 16.9141 4.25781 15.1562C4.25781 15.1562 3.82812 14.0234 3.20312 13.75C3.20312 13.75 2.30469 13.125 3.24219 13.125C3.24219 13.125 4.21875 13.2031 4.76562 14.1406C5.625 15.6641 7.03125 15.2344 7.61719 14.9609C7.69531 14.3359 7.92969 13.9062 8.24219 13.6328C6.05469 13.3984 3.82812 13.0859 3.82812 9.33594C3.82812 8.24219 4.14062 7.73438 4.76562 7.03125C4.64844 6.75781 4.33594 5.74219 4.88281 4.375C5.66406 4.14062 7.57812 5.42969 7.57812 5.42969C8.35938 5.19531 9.17969 5.11719 10 5.11719C10.8594 5.11719 11.6797 5.19531 12.4609 5.42969C12.4609 5.42969 14.3359 4.10156 15.1562 4.375C15.7031 5.74219 15.3516 6.75781 15.2734 7.03125C15.8984 7.73438 16.2891 8.24219 16.2891 9.33594C16.2891 13.0859 13.9844 13.3984 11.7969 13.6328C12.1484 13.9453 12.4609 14.5312 12.4609 15.4688C12.4609 16.7578 12.4219 18.3984 12.4219 18.7109C12.4219 18.9844 12.6172 19.2969 13.125 19.1797C17.0312 17.8906 19.6875 14.1797 19.6875 9.84375C19.6875 4.45312 15.2734 0.3125 9.84375 0.3125ZM4.10156 13.7891C4.02344 13.8281 4.0625 13.9453 4.10156 14.0234C4.17969 14.0625 4.25781 14.1016 4.33594 14.0625C4.375 14.0234 4.375 13.9062 4.29688 13.8281C4.21875 13.7891 4.14062 13.75 4.10156 13.7891ZM3.67188 13.4766C3.63281 13.5547 3.67188 13.5938 3.75 13.6328C3.82812 13.6719 3.90625 13.6719 3.94531 13.5938C3.94531 13.5547 3.90625 13.5156 3.82812 13.4766C3.75 13.4375 3.71094 13.4375 3.67188 13.4766ZM4.92188 14.8828C4.88281 14.9219 4.88281 15.0391 5 15.1172C5.07812 15.1953 5.19531 15.2344 5.23438 15.1562C5.27344 15.1172 5.27344 15 5.19531 14.9219C5.11719 14.8438 5 14.8047 4.92188 14.8828ZM4.49219 14.2969C4.41406 14.3359 4.41406 14.4531 4.49219 14.5312C4.57031 14.6094 4.64844 14.6484 4.72656 14.6094C4.76562 14.5703 4.76562 14.4531 4.72656 14.375C4.64844 14.2969 4.57031 14.2578 4.49219 14.2969Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const PullRequestIcon: FC<SvgIconProps> = ({ sx = [], ...props }) => {
  return (
    <SvgIcon
      sx={[
        {
          width: "1em",
          height: "1em",
          fontSize: 16,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      viewBox="0 0 12 13"
      fill="none"
      {...props}
    >
      <path
        opacity="0.75"
        d="M11.25 2.375C11.25 1.34375 10.4062 0.5 9.375 0.5C8.32031 0.5 7.5 1.34375 7.5 2.375C7.5 3.21875 8.03906 3.92188 8.8125 4.15625V5C8.8125 5.53906 8.39062 5.9375 7.875 5.9375H4.125C3.77344 5.9375 3.46875 6.03125 3.1875 6.19531V4.15625C3.9375 3.92188 4.5 3.21875 4.5 2.375C4.5 1.34375 3.65625 0.5 2.625 0.5C1.57031 0.5 0.75 1.34375 0.75 2.375C0.75 3.21875 1.28906 3.92188 2.0625 4.15625V8.86719C1.28906 9.10156 0.75 9.80469 0.75 10.625C0.75 11.6797 1.57031 12.5 2.625 12.5C3.65625 12.5 4.5 11.6797 4.5 10.625C4.5 9.80469 3.9375 9.10156 3.1875 8.86719V8C3.1875 7.48438 3.58594 7.0625 4.125 7.0625H7.875C9 7.0625 9.9375 6.14844 9.9375 5V4.15625C10.6875 3.92188 11.25 3.21875 11.25 2.375ZM2.625 1.625C3.02344 1.625 3.375 1.97656 3.375 2.375C3.375 2.79688 3.02344 3.125 2.625 3.125C2.20312 3.125 1.875 2.79688 1.875 2.375C1.875 1.97656 2.20312 1.625 2.625 1.625ZM2.625 11.375C2.20312 11.375 1.875 11.0469 1.875 10.625C1.875 10.2266 2.20312 9.875 2.625 9.875C3.02344 9.875 3.375 10.2266 3.375 10.625C3.375 11.0469 3.02344 11.375 2.625 11.375ZM9.375 3.125C8.95312 3.125 8.625 2.79688 8.625 2.375C8.625 1.97656 8.95312 1.625 9.375 1.625C9.77344 1.625 10.125 1.97656 10.125 2.375C10.125 2.79688 9.77344 3.125 9.375 3.125Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const LinkIcon: FC<SvgIconProps> = ({ sx = [], ...props }) => {
  return (
    <SvgIcon
      sx={[
        {
          width: "1em",
          height: "1em",
          fontSize: 16,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      viewBox="0 0 20 17"
      fill="none"
      {...props}
    >
      <path
        d="M18.6562 1.34375C17.8125 0.46875 16.7188 0.03125 15.5938 0.03125C14.4062 0 13.2188 0.4375 12.3438 1.34375L10.5312 3.09375C10.9688 3.34375 11.4062 3.625 11.7812 3.96875L13.375 2.40625C13.9375 1.8125 14.7188 1.5 15.5 1.5C16.25 1.5 17.0312 1.8125 17.5938 2.40625C18.7812 3.5625 18.7812 5.46875 17.5938 6.625L14.0625 10.1562C12.9375 11.3125 10.9688 11.3125 9.84375 10.1562C9.25 9.59375 8.9375 8.84375 8.9375 8.0625C8.9375 7.5 9.09375 6.96875 9.375 6.53125C9.03125 6.1875 8.53125 6 8.03125 6C8 6 7.96875 6 7.96875 6C7.625 6.625 7.4375 7.3125 7.4375 8.03125C7.4375 9.25 7.90625 10.375 8.78125 11.2188C9.625 12.0625 10.75 12.5312 11.9375 12.5312C13.1562 12.5312 14.2812 12.0938 15.125 11.2188L18.6562 7.6875C19.5312 6.8125 19.9688 5.65625 20 4.5C20 3.34375 19.5312 2.21875 18.6562 1.34375ZM6.59375 13.625C6.03125 14.1875 5.25 14.5 4.46875 14.5C3.71875 14.5 2.9375 14.1875 2.375 13.625C1.1875 12.4375 1.1875 10.5312 2.375 9.375L5.90625 5.84375C7.03125 4.6875 9 4.6875 10.125 5.84375C10.7188 6.40625 11.0312 7.15625 11.0312 7.96875C11.0312 8.5 10.875 9.03125 10.5938 9.5C10.9375 9.8125 11.4375 10 11.9375 10C11.9688 10 12 10 12 10C12.3438 9.375 12.5312 8.6875 12.5312 7.96875C12.5312 6.75 12.0625 5.625 11.1875 4.78125C10.3438 3.9375 9.21875 3.46875 8.03125 3.46875C6.8125 3.46875 5.6875 3.9375 4.84375 4.78125L1.3125 8.34375C0.4375 9.21875 0 10.375 0 11.5312C0 12.6562 0.4375 13.8125 1.3125 14.6875C2.125 15.5 3.15625 15.9688 4.25 16C5.46875 16.0625 6.71875 15.625 7.65625 14.6875L9.4375 12.9375C9 12.6875 8.5625 12.4062 8.1875 12.0625L6.59375 13.625Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const CommentIcon: FC<SvgIconProps> = ({ sx = [], ...props }) => {
  return (
    <SvgIcon
      sx={[
        {
          width: "1em",
          height: "1em",
          fontSize: 16,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      viewBox="0 0 17 17"
      fill="none"
      {...props}
    >
      <path
        d="M14.9688 0.5H2.96875C1.84375 0.5 0.96875 1.40625 0.96875 2.5V11.4688C0.96875 12.5625 1.84375 13.4375 2.96875 13.4375H5.96875V16.0625C5.96875 16.375 6.3125 16.5312 6.5625 16.3438L10.4688 13.4375H14.9688C16.0625 13.4375 16.9688 12.5312 16.9688 11.4688V2.5C16.9688 1.40625 16.0938 0.5 14.9688 0.5ZM15.5 11.5C15.5 11.7812 15.25 12 15 12H10L7.5 13.875V12H3C2.71875 12 2.5 11.7812 2.5 11.5V2.5C2.5 2.25 2.71875 2 3 2H15C15.25 2 15.5 2.25 15.5 2.5V11.5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const ChevronDownIcon: FC<SvgIconProps> = ({ sx = [], ...props }) => {
  return (
    <SvgIcon
      sx={[
        {
          width: "1em",
          height: "1em",
          fontSize: 16,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <path
        d="M6 9.75C5.78906 9.75 5.60156 9.67969 5.46094 9.53906L0.960938 5.03906C0.65625 4.75781 0.65625 4.26562 0.960938 3.98438C1.24219 3.67969 1.73438 3.67969 2.01562 3.98438L6 7.94531L9.96094 3.98438C10.2422 3.67969 10.7344 3.67969 11.0156 3.98438C11.3203 4.26562 11.3203 4.75781 11.0156 5.03906L6.51562 9.53906C6.375 9.67969 6.1875 9.75 6 9.75Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const CheckDoubleIcon: FC<SvgIconProps> = ({ sx = [], ...props }) => {
  return (
    <SvgIcon
      sx={[
        {
          width: "1em",
          height: "1em",
          fontSize: 16,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M15 4.96875C14.6875 4.6875 14.2188 4.6875 13.9375 4.96875L6 12.9688L2 8.96875C1.71875 8.6875 1.25 8.6875 0.96875 8.96875C0.65625 9.28125 0.65625 9.75 0.96875 10.0312L5.46875 14.5312C5.59375 14.6875 5.78125 14.75 6 14.75C6.1875 14.75 6.375 14.6875 6.5 14.5312L15 6.03125C15.3125 5.75 15.3125 5.28125 15 4.96875ZM5.46875 7.53125C5.59375 7.6875 5.78125 7.75 6 7.75C6.1875 7.75 6.375 7.6875 6.5 7.53125L12 2.03125C12.3125 1.75 12.3125 1.28125 12 1C11.7188 0.6875 11.25 0.6875 10.9688 1L6 5.96875L3.5 3.46875C3.1875 3.1875 2.71875 3.1875 2.4375 3.46875C2.125 3.78125 2.125 4.25 2.4375 4.53125L5.46875 7.53125Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const ClearIcon: FC<SvgIconProps> = ({ sx = [], ...props }) => {
  return (
    <SvgIcon
      sx={[
        {
          width: "1em",
          height: "1em",
          fontSize: 16,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M8 0C3.5625 0 0 3.59375 0 8C0 12.4375 3.5625 16 8 16C12.4062 16 16 12.4375 16 8C16 3.59375 12.4062 0 8 0ZM1.5 8C1.5 6.5 2 5.09375 2.90625 4L12.0312 13.125C10.9062 13.9688 9.5 14.5 8 14.5C4.40625 14.5 1.5 11.5938 1.5 8ZM13.0625 12.0312L3.96875 2.9375C5.0625 2.03125 6.46875 1.5 8 1.5C11.5625 1.5 14.5 4.4375 14.5 8C14.5 9.53125 13.9688 10.9375 13.0625 12.0312Z"
        fill="#91A5BA"
      />
    </SvgIcon>
  );
};

export const CloseIcon: FC<SvgIconProps> = ({ sx = [], ...props }) => {
  return (
    <SvgIcon
      sx={[
        {
          width: "1em",
          height: "1em",
          fontSize: 16,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <path
        d="M12.75 12.5642C13.0312 12.8767 13.0312 13.3455 12.75 13.6267C12.4375 13.9392 11.9688 13.9392 11.6875 13.6267L8 9.90796L4.28125 13.6267C3.96875 13.9392 3.5 13.9392 3.21875 13.6267C2.90625 13.3455 2.90625 12.8767 3.21875 12.5642L6.9375 8.84546L3.21875 5.12671C2.90625 4.81421 2.90625 4.34546 3.21875 4.06421C3.5 3.75171 3.96875 3.75171 4.25 4.06421L8 7.81421L11.7188 4.09546C12 3.78296 12.4688 3.78296 12.75 4.09546C13.0625 4.37671 13.0625 4.84546 12.75 5.15796L9.03125 8.84546L12.75 12.5642Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
