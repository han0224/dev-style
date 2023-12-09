import Image from "next/image";
import Link from "next/link";
import { commonText, login } from "@/constants/text";
import Form from "@/components/login/Form";
import Input from "@/components/login/Input";
import { TForm } from "@/types/type";

export default function register() {
  const formProps: TForm = {
    loginPath: "/",
    method: "POST",
    submitText: login.register,
    link: "/login",
    linkText: login.login,
    linkDesc: login.haveAccount,
    formType: "register",
  };

  return (
    <div className="h-full w-full mt-16">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <div className={"relative w-20 h-20"}>
            <Image
              src={"/logo.png"}
              alt={commonText.projectName}
              fill
              priority
              sizes="(max-width: 732px) 90vw, (max-width: 992px) 45vw, 320px"
              style={{ objectFit: "cover" }}
            />
          </div>
          {commonText.projectName}
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {login.register}
            </h1>
            <Form {...formProps}>
              <Input
                label="email"
                id="email"
                type="email"
                name="email"
                placeholder="name@company.com"
                required
              />
              <Input
                label="password"
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
              {/* TODO: 두 비번이 틀렸을 경우 해야함 */}
              <Input
                label="confirm password"
                id="confirm password"
                type="password"
                name="confirm password"
                placeholder="••••••••"
                required
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
