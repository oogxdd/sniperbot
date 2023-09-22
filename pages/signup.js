import styled from "styled-components";
import { useRouter } from "next/router";
import {
  Heading,
  Subheading,
  Input,
  Checkbox,
  Button,
  Hint,
  Logo,
} from "@/components/ui";

const PageContainer = styled.div.attrs({ className: "" })`
  background: ${(props) => props.theme.mainBg};
`;

export default function SignupPage() {
  const router = useRouter();

  return (
    <PageContainer className="flex min-h-screen justify-between max-h-screen overflow-auto">
      <div className="flex flex-col w-full items-center overflow">
        <Form>
          <Logo style={{ margin: 0, padding: 0, marginBottom: 66 }} />
          <div className="flex flex-col w-full">
            <Heading>Set up your account</Heading>
            <Subheading>
              We're excited to get you started with hiring your next candidates.
            </Subheading>
            <div
              className="flex flex-col space-y-5 w-full"
              style={{ marginTop: 42 }}
            >
              <Input label="Email address" placeholder="Email address" />
              <Input label="Username" placeholder="Username" />
              <Input label="Password" placeholder="Password" />
              <Checkbox label="I accept Sniperbot.io Privacy Policy" />
              <ButtonPrimary
                primary
                onClick={(e) => {
                  e.preventDefault(router.push("/home"));
                }}
              >
                Create account
              </ButtonPrimary>
            </div>
          </div>
          <div
            className="flex items-center"
            style={{
              marginTop: 125,
            }}
          >
            <Hint className="mr-2.5">Already have an account?</Hint>
            <ButtonSecondary
              onClick={(e) => {
                e.preventDefault(router.push("/login"));
              }}
              outline
              style={{ color: "#017FB2" }}
            >
              Log in
            </ButtonSecondary>
          </div>
        </Form>
      </div>
      <Image />
    </PageContainer>
  );
}

const Image = styled.img.attrs({
  src: "/images/signup-image.png",
  className: "hidden md:block",
})`
  width: 500px;
  background: gray;
`;

const ButtonPrimary = styled(Button).attrs({
  className: "flex items-center justify-center",
})`
  border-radius: 10px;
  background: #8647eb;
  color: #fff;
  text-align: center;
  font-family: Sequel Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 415;
  line-height: normal;
  letter-spacing: -0.15px;

  :hover {
    background: ${(props) => props.theme.purpleHover};
  }

  :focus {
    background: ${(props) => props.theme.purpleFocus};
  }
`;

const ButtonSecondary = styled(Button).attrs({
  className: "flex items-center justify-center",
})`
  color: #9e62ff !important;
`;

const Form = styled.div.attrs({
  className: "flex flex-col items-start justify-between md:justify-start",
})`
  width: 390px;
  margin-top: 110px;

  @media (max-width: 768px) {
    margin-top: 0px;
    width: 100%;
    height: 100%;
    padding: 20px 20px 26px 20px;
  }
`;
