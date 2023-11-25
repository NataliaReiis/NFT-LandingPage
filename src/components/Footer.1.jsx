export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["About", "Tearms", "Legal"],
    },
    {
      title: "NFT",
      data: ["OpenSea", "Maker", "Learn"],
    },
    {
      title: "Contact",
      data: ["Press", "Support"],
    },
    {
      title: "Social",
      data: ["Twitter", "Instagram"],
    },
  ];
  const socialLink = [
    ((<BsFacebook />), (<BsTwitter />), (<BsInstagram />), (<FaTiktok />)),
  ];
  return <div></div>;
}
