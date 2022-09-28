export type project = {
  name: string;
  title: string;
  images: string[];
  text: string;
};

export const projects: project[] = [
  {
    name: "NEEOS",
    title: "Founder & CEO",
    images: ["/neeos3.png", "/neeos1.png", "/neeos2.png"],
    text: "During the Covid pandemic my team and I developed a hybrid solution: NEEOS. We equip schools with filming devices and built an app and website enabling professors to stream and record all their classes and make them available 24/7 for all their students, All over the world in an easy, user-friendly package. Even in this period of uncertainty.",
  },
  {
    name: "Blockchain speaker at T-HUB Bali",
    title: "Speaker",
    images: ["/speaker.png", "/speaker2.png"],
    text: "I organized and hosted multiple physical and digital talks in collaboration with Tokocrypto. Pushing for the mass adoption of Blockchain by spreading my passion and knowledge about this revolutionary technology. Around 300 people in total attended my talks as the last in date: 'Understanding blockchain & cryptocurrency investing.'",
  },
  {
    name: "FiftyFifty's",
    title: "CTO",
    images: ["/ff1.png", "/ff2.png"],
    text: "FiftyFifty's is a Web3 company offering lottery draws enabling users to use crypto to earn the physical products of their dreams. Fullstack web2 / web3 app and website integrated on the ethereum blockchain.",
  },
];
