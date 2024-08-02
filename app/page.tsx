import { Button, Center, Container, Text } from '@yamada-ui/react';
import { auth, signIn, signOut } from '@/auth'

export default async function Home() {

  const session = await auth();
  const name = session?.user?.name

  return (
    <Container as={Center} m="auto" h="100dvh">
      {
        session ?
          <>
            <Text>Home Page</Text>
            <Text>Welcome, {name}!</Text>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button type="submit">ログアウト</Button>
            </form>
          </> :
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <Button type="submit">ログイン</Button>
          </form>
      }
    </Container>
  );
}
