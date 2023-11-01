const HomePage = () => (
  <div className="flex flex-col items-center">
    <Header />
    <HeroBlock />
    <SecondBlock />
    <ThirdBlock />
    <ForthBlock />
    <FifthBlock />
    <SixthBlock />
    <SeventhBlock />
    <EightBlock />
  </div>
);

const EightBlock = () => (
  <div className="flex flex-col items-start w-screen px-20 py-16 bg-gray-100">
    <Title>Out students take up professions in</Title>
    <div className="grid grid-cols-3">
      <StatBlock />
      <StatBlock />
      <GetStartedNow />
    </div>
    <div className="grid grid-cols-6">
      <TestimonialBlock />
      <TestimonialBlock />
      <TestimonialBlock />
      <TestimonialBlock />
      <TestimonialBlock />
      <TestimonialBlock />

      <TestimonialBlock />
      <TestimonialBlock />
      <TestimonialBlock />
      <TestimonialBlock />
      <TestimonialBlock />
      <TestimonialBlock />
    </div>
  </div>
);

const TestimonialBlock = () => (
  <div className="flex flex-col items-center justify-center">
    <TestimonialBlockImg />
  </div>
);

const TestimonialBlockImg = styled.img.attrs({ src: "", alt: "" })``;

const SeventhBlock = () => (
  <div className="flex flex-col">
    <Title></Title>
    <div className="flex">
      <div className="flex flex-col">
        <Checklist />
        <div className="flex gap-3">
          <Button primary>Get started</Button>
          <Button>Out policy</Button>
        </div>
      </div>
      <SeventhBlockImg />
    </div>
  </div>
);

const SeventhBlockImg = styled.img.attrs({ src: "", alt: "" })``;

const FifthBlock = () => (
  <div className="w-screen flex flex-col">
    <Title type="xl">Unleash potential: The course tailored for you!</Title>
    <FeatureProp />
    <FeatureProp reverse />
    <FeatureProp />
  </div>
);

const FeatureProp = ({
  title = "Trailblazers of Tomorrow: Pioneering Industry Expertise",
  subtitle = "Our specialists have many years of experience and lead international projects. They will teach you how to be a genius in online advertising, data analytics, and web development.",
  reverse = false,
}) => (
  <div className={`flex ${reverse ? "flex-row-reverse" : ""}`}>
    <div className="flex flex-col">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </div>
    <FeaturePropImg />
  </div>
);

const FeaturePropImg = styled.img.attrs({ src: "", alt: "" })``;

const SixthBlock = () => (
  <div className="w-screen flex flex-col">
    <div className="grid grid-cols-3">
      <BlockStat />
      <BlockStat />
      <BlockStat />
    </div>
    <div className="grid grid-cols-2">
      <BlockStat blue />
      <BlockImg />
    </div>
  </div>
);

const BlockStat = ({
  title = "$115,000",
  subtitle = "This is the global average salary for a leading IT specialist",
  blue = false,
}) => (
  <div className="flex flex-col">
    <BlockStateTitle color={blue ? "#FFF" : "#000"}>{title}</BlockStateTitle>
    <BlockStateSubtitle color={blue ? "#FFF" : "#000"}>
      {subtitle}
    </BlockStateSubtitle>
  </div>
);

const ForthBlock = () => (
  <div className="w-screen flex flex-col">
    <Title type="h2" color="light">
      Mastering Tomorrow: Courses Crafted for the Future
    </Title>
    <Subtitle color="light">
      Embark on a journey towards professional excellence and secure your ideal
      career opportunity.
    </Subtitle>
    <div className="grid grid-cols-2">
      <CourseBlock />
      <CourseBlock />
      <CourseBlock />
      <CourseBlock />
    </div>
  </div>
);

const CourseBlock = ({
  title = "Digital Marketing",
  description = `You'll weave through data intricacies, orchestrate mesmerizing marketing narratives, produce artful promotional content, and ascend gracefully into your destined career.`,
  duration = "10 months",
  discount = 60,
}) => (
  <CourseContainer className="flex flex-col relative">
    <CourseTitle>{title}</CourseTitle>
    <CourseDescription>{description}</CourseDescription>
    <div className="flex gap-3">
      <Button course>Learn more</Button>
      {duration && (
        <CourseDuration>
          <DurationIcon />
          {duration}
        </CourseDuration>
      )}
    </div>
    <CourseIllustration />
  </CourseContainer>
);

const CourseContainer = styled.div.attrs({ className: "" })``;
const CourseTitle = styled.h3.attrs({ className: "" })``;
const CourseDescription = styled.p.attrs({ className: "" })``;
const CourseDuration = styled.span.attrs({ className: "" })``;
const CourseIllustration = styled.img.attrs({ src: "", alt: "" })``;
const DurationIcon = styled.img.attrs({ src: "", alt: "" })``;

const ThirdBlock = () => (
  <div className="flex flex-col">
    <Title type="h2">Unlocking Your Potential: A Deep Dive</Title>
    <div className="grid grid-cols-4">
      <Stat color="dark" />
      <Stat color="dark" />
      <Stat color="dark" />
      <Stat color="dark" />
    </div>
  </div>
);

const SecondBlock = () => (
  <div className="flex flex-col items-center">
    <Text subtle>#1 on</Text>
    <PHImg />
    <SecondBlockIllustration />
    <div className="grid grid-cols-4">
      <Stat color="light" />
      <Stat color="light" />
      <Stat color="light" />
      <Stat color="light" />
    </div>
  </div>
);

const Stat = ({
  label = "1st place",
  value = "Product of the day",
  color = "light",
}) => (
  <div className="flex flex-col">
    <StatImg />
    <Label color={color === "light" ? "#FFF" : "#000"}>{label}</Label>
    <Value color={color === "light" ? "#FFF" : "#000"}>{value}</Value>
  </div>
);

const StatImg = styled.img.attrs({ src: "", alt: "" })``;
const Label = styled.span.attrs({ className: "" })``;
const Value = styled.span.attrs({ className: "" })``;

const PHImg = styled.img.attrs({ src: "", alt: "" })``;
const SecondBlockIllustration = styled.img.attrs({ src: "", alt: "" })``;

const HeroBlock = () => (
  <div className="flex flex-col items-center">
    <Title>EmpowerNext: Unleashing Potential in the Digital Era</Title>
    <Subtitle>
      Unlocking IT: SEA's Ultimate Guide to Mastering Tech Skills from Zero to
      Pro
    </Subtitle>
    <div className="flex gap-3">
      <Button primary>Get started</Button>
      <Button subtle>Learn more</Button>
    </div>
    <HeroBgImg />
  </div>
);

const HeroBgImg = styled.img.attrs({ src: "", alt: "" })``;

export default HomePage;
