import { login } from "@/constants/text";
import { TForm } from "@/types/type.d";
import Link from "next/link";

export default function Form(props: TForm) {
  return (
    <form
      className="space-y-4 md:space-y-6"
      action={props.loginPath}
      method={props.method}
    >
      {props.children}
      {/* TODO: 로그인일 경우 자동로그인 회원가입일 경우 없어도 될듯? */}
      {props.formType === "login" ? (
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 
                                    cursor-pointer
                                    focus:ring-3 focus:ring-primary-300
                                    dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                {login.remember}
              </label>
            </div>
          </div>
          <Link
            href="/search"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            {login.searchPassword}
          </Link>
        </div>
      ) : (
        <></>
      )}

      {/* TODO: props로 받아 텍스트 */}
      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                            dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {props.submitText}
      </button>

      {/* TODO: 로그인일 경우 회원가입페이지로 회원가입일 경우 로그인페이지로 이동 */}
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        {props.linkDesc}{" "}
        <Link
          href={props.link}
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          {props.linkText}
        </Link>
      </p>
    </form>
  );
}
