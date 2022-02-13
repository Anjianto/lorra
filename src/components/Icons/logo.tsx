interface Props {
  fill?: "white" | "black";
}

export const Logo = ({ fill }: Props) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.8359 7.41797C32.2362 7.41797 27.3741 7.41797 26.5078 7.41797V4.25391C26.5078 2.50924 25.0884 1.08984 23.3438 1.08984H12.6562C10.9116 1.08984 9.49219 2.50924 9.49219 4.25391V7.41797C8.69695 7.41797 3.81403 7.41797 3.16406 7.41797C1.4194 7.41797 0 8.83737 0 10.582C0 11.3709 0 30.8647 0 31.7461C0 33.4908 1.4194 34.9102 3.16406 34.9102C4.72275 34.9102 31.6113 34.9102 32.8359 34.9102C34.5806 34.9102 36 33.4908 36 31.7461C36 30.9573 36 11.4634 36 10.582C36 8.83737 34.5806 7.41797 32.8359 7.41797ZM11.6016 4.25391C11.6016 3.67235 12.0747 3.19922 12.6562 3.19922H23.3438C23.9253 3.19922 24.3984 3.67235 24.3984 4.25391V7.41797H11.6016V4.25391ZM2.10938 10.582C2.10938 10.0005 2.58251 9.52734 3.16406 9.52734H6.32812V10.582C6.32812 12.3267 4.90873 13.7461 3.16406 13.7461H2.10938V10.582ZM6.32812 32.8008H3.16406C2.58251 32.8008 2.10938 32.3276 2.10938 31.7461V28.582H3.16406C4.90873 28.582 6.32812 30.0014 6.32812 31.7461V32.8008ZM33.8906 31.7461C33.8906 32.3276 33.4175 32.8008 32.8359 32.8008H29.6719V31.7461C29.6719 30.0014 31.0913 28.582 32.8359 28.582H33.8906V31.7461ZM33.8906 26.4727H32.8359C29.9282 26.4727 27.5625 28.8383 27.5625 31.7461V32.8008H8.4375V31.7461C8.4375 28.8383 6.07184 26.4727 3.16406 26.4727H2.10938V15.8555H3.16406C6.07184 15.8555 8.4375 13.4898 8.4375 10.582V9.52734H27.5625V10.582C27.5625 13.4898 29.9282 15.8555 32.8359 15.8555H33.8906V26.4727ZM33.8906 13.7461H32.8359C31.0913 13.7461 29.6719 12.3267 29.6719 10.582V9.52734H32.8359C33.4175 9.52734 33.8906 10.0005 33.8906 10.582V13.7461Z"
        fill={fill}
      />
      <path
        d="M25.211 16.3257C24.3263 15.3423 23.1013 14.8008 21.7617 14.8008C20.2769 14.8008 18.9767 15.4866 18 16.7847C17.0233 15.4866 15.7231 14.8008 14.2383 14.8008C12.8987 14.8008 11.6737 15.3423 10.789 16.3257C9.95273 17.2552 9.49219 18.4956 9.49219 19.8186C9.49219 22.8337 11.9829 24.9147 15.4301 27.7949C16.0325 28.2982 16.6555 28.8187 17.3136 29.3827C17.5111 29.552 17.7555 29.6366 18 29.6366C18.2445 29.6366 18.4889 29.552 18.6864 29.3827C19.3446 28.8186 19.9676 28.2981 20.57 27.7947C24.0172 24.9147 26.5078 22.8336 26.5078 19.8186C26.5078 18.4957 26.0473 17.2553 25.211 16.3257ZM19.2175 26.1761C18.8222 26.5063 18.4181 26.844 18 27.1973C17.5819 26.844 17.1779 26.5064 16.7826 26.1761C13.6627 23.5695 11.6016 21.8474 11.6016 19.8186C11.6016 18.1605 12.7351 16.9102 14.2383 16.9102C16.2071 16.9102 16.9566 19.2173 16.9916 19.3284C17.1273 19.7715 17.5364 20.0742 18 20.0742C18.465 20.0742 18.875 19.7698 19.0095 19.3247C19.0169 19.3005 19.7625 16.9102 21.7617 16.9102C23.2649 16.9102 24.3984 18.1605 24.3984 19.8186C24.3984 21.8474 22.3374 23.5695 19.2175 26.1761Z"
        fill={fill}
      />
    </svg>
  );
};