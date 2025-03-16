import { RegisterForm } from '@/components/modules/auth/register-form';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '@/lib/auth';
// import { redirect } from 'next/navigation';

export default async function RegisterPage() {
  // const session = await getServerSession(authOptions);

  // if (session) {
  //   redirect('/dashboard');
  // }

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your details to create your admin account
        </p>
      </div>
      <RegisterForm />
    </>
  );
}
