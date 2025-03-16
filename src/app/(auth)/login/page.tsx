import { LoginForm } from '@/components/modules/auth/login-form';
// import { getServerSession } from 'next-auth';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '@/lib/auth';
// import { redirect } from 'next/navigation';

export default async function LoginPage() {
  // const session = await getServerSession(authOptions);

  // if (session) {
  //   redirect('/dashboard');
  // }

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </div>
      <LoginForm />
    </>
  );
}
