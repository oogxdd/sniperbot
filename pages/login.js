import styled from "styled-components";
import { useRouter } from "next/router";
import {
  Heading,
  Subheading,
  Input,
  Button,
  Hint,
  Logo,
} from "@/components/ui";

export default function LoginPage() {
  const router = useRouter();

  return (
    <PageContainer className="flex min-h-screen justify-between max-h-screen overflow-auto">
      <div className="flex flex-col w-full items-center overflow">
        <Form>
          <Logo style={{ margin: 0, padding: 0, marginBottom: 66 }} />
          <div className="flex flex-col w-full">
            <Heading>Sign in right now</Heading>
            <Subheading>
              We're excited to get you started with hiring your next candidates.
            </Subheading>
            <div
              className="flex flex-col space-y-5 w-full"
              style={{ marginTop: 42 }}
            >
              <Input label="Username" placeholder="Username" />
              <Input label="Password" placeholder="Password" mask />
              <ButtonPrimary
                primary
                onClick={(e) => {
                  e.preventDefault(router.push("/home"));
                }}
              >
                Log in
              </ButtonPrimary>
            </div>
          </div>
          <div
            className="flex items-center"
            style={{
              marginTop: 125,
            }}
          >
            <Hint className="mr-2.5">Don't have an account?</Hint>
            <ButtonSecondary
              secondary
              style={
                {
                  // color: "#8647EB",
                }
              }
              onClick={(e) => {
                e.preventDefault(router.push("/signup"));
              }}
            >
              Sign up
            </ButtonSecondary>
          </div>
        </Form>
      </div>
      <Image />
    </PageContainer>
  );
}

const Image = styled.img.attrs({
  src: "/images/login-image.png",
  className: "hidden md:block",
})`
  width: 500px;
  background: gray;
`;

const ButtonPrimary = styled(Button).attrs({
  className: "flex items-center justify-center",
})`
  border-radius: 10px;
  background: #017fb2;
  color: #fff;

  :hover {
    background: ${(props) => props.theme.tealHover} !important;
  }

  :focus {
    background: ${(props) => props.theme.tealFocus} !important;
  }
`;

const ButtonSecondary = styled(Button).attrs({
  className: "flex items-center justify-center",
})`
  color: #017fb2;
`;

const Form = styled.div.attrs({
  className: "flex flex-col items-start justify-between md:justify-start",
})`
  width: 390px;
  margin-top: 200px;

  @media (max-width: 768px) {
    margin-top: 0px;
    width: 100%;
    height: 100%;
    padding: 20px 20px 26px 20px;
  }
`;

// const PageContainer =  styled.div.attrs({ className: '' })``
const PageContainer = styled.div.attrs({ className: "" })`
  background: ${(props) => props.theme.mainBg};
`;
