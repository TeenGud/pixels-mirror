import { Background } from "@/components/Background";
import { Content } from "@/components/Content";
import { Disks } from "@/components/Disks";


export default function Home() {
  return (
    <>
      <Background>
        <div></div>
      </Background>
      <Disks />
      <Content />
    </>
  );
}
