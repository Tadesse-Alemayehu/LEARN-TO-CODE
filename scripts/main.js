let main = null;
let header = null;
let home = null;
let tutors = null;
let customers = null;
let footer = null;
let navigation = null;
let mobileMenuToggle = null;
let featureSpeakersSection = null;
//list os speakers inside array of objects
const speakers = [
  {
    witnessImage: "./Images/pictures/speaker_01.png",
    imageAlt: "witness one",
    title: "Bekalu Berie",
    subTitle: "Full stack developer fro more than 10 yeats with react JS",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    witnessImage: "./Images/pictures/speaker_03.png",
    imageAlt: "witness two",
    title: "Yibabie Getenet",
    subTitle: "Website Developer at ministry of finance",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem purus, fermentum ac dictum id, dapibus rutrum nunc.",
  },
  {
    witnessImage: "./Images/pictures/speaker_02.png",
    imageAlt: "witness three",
    title: "Getasew Hailu",
    subTitle: "Full stack developer fro more than 10 yeats with react JS",
    content:
      "Kilnam Chon helped bring the RE tecnologies to Asia an is and outspoken advocate for the open web and digital commons.",
  },
  {
    witnessImage: "./Images/pictures/speaker_04.png",
    imageAlt: "witness four",
    title: "Wosane Mulat",
    subTitle: "Full stack developer fro more than 10 yeats with react JS",
    content:
      "Julia began developing solar concentrators with her research team in 1996. Since 2007, Julia participate in GreenSun Energy.",
  },
  {
    witnessImage: "./Images/pictures/speaker_05.png",
    imageAlt: "witness five",
    title: "Muluken melkie",
    subTitle: "Full stack developer fro more than 10 yeats with react JS",
    content:
      "Her research has been primarily focus on development of new routes to enhance performance and stability of next generation solar cells and energy storage devices.",
  },
  {
    witnessImage: "./Images/pictures/speaker_06.png",
    imageAlt: "witness six",
    title: "Maru Sisay",
    subTitle: "Full stack developer fro more than 10 yeats with react JS",
    content: "Ryan had been leading open-source projects at Renewable Energy.",
  },
];
// attach show mobile menu EVENT to any element with any event(click,hover,more...).
const EventShowMobileMenu = (element, event) => {
  element.addEventListener(event, () => {
    navigation.setAttribute("class", "");
  });
  const menuElements = Array.from(navigation.querySelectorAll("li"));
  menuElements.push(...Array.from(navigation.querySelectorAll("#close-menu")));
  menuElements.push(...Array.from(navigation.querySelectorAll(".remaining")));
  for (let element of menuElements) {
    EventHideMobileMenu(element, "click");
  }
};

// atache hide mobile menu EVENT
const EventHideMobileMenu = (element, event) => {
  element.addEventListener(event, () => {
    navigation.setAttribute("class", "hide");
  });
};

// create list of reputaion's (speakers)
const createSpeakerCard = (speaker) => {
  const reputaion = document.createElement("div");
  reputaion.classList.add("reputation");

  const witnessImgContainer = document.createElement("span");
  witnessImgContainer.classList.add("witness-img");
  const witnessImg = document.createElement("img");
  witnessImg.src = speaker.witnessImage;
  witnessImg.alt = speaker.imageAlt;
  witnessImgContainer.appendChild(witnessImg);
  reputaion.appendChild(witnessImgContainer);

  const text = document.createElement("span");
  text.classList.add("text");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = speaker.title;
  text.appendChild(title);

  const subTitle = document.createElement("p");
  subTitle.classList.add("sub-title");
  subTitle.textContent = speaker.subTitle;
  text.appendChild(subTitle);

  const hr = document.createElement("hr");
  hr.classList.add("left-tick");
  text.appendChild(hr);

  const content = document.createElement("p");
  content.classList.add("content");
  content.textContent = speaker.content;
  text.appendChild(content);

  reputaion.appendChild(text);
  return reputaion;
};

const updateSpeakers = (speakerSection) => {
  for (let speaker of speakers) {
    speakerSection.appendChild(createSpeakerCard(speaker));
    // console.log(speaker);
  }
};
document.addEventListener("DOMContentLoaded", (event) => {
  main = document.querySelector("main");
  header = main.querySelector("header");
  home = main.querySelector("#home");
  tutors = document.querySelector("#main-tutors");
  customers = document.querySelector("#customers");
  footer = document.querySelector("footer");
  mobileMenuToggle = header.querySelector("#drop-menu");
  navigation = header.querySelector("nav");
  EventShowMobileMenu(mobileMenuToggle, "click");
  try {
    featureSpeakersSection = customers.querySelector("#reputation-list");
    updateSpeakers(featureSpeakersSection);
  } catch (exe) {
    console.log("Canno't set a feature speaker outside of the home-page");
  }
});