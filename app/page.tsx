import { Button, Center, Container, Text } from '@yamada-ui/react';
// import { signIn } from 'next-auth/react';
import { auth, signIn, signOut } from '@/auth'

export default async function Home() {

  const session = await auth();
  if (session) {
    return (
      <Container as={Center} m="auto" h="100dvh">
        <Text>Home Page</Text>
        <Text>Welcome, {session.user?.name}!</Text>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit">ログアウト</Button>
          </form>
      </Container>
    );
  }

  return (
    <Container as={Center} m="auto" h="100dvh">
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button type="submit">ログイン</Button>
      </form>
    </Container>
  );
}
