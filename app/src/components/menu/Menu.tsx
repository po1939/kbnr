import React from "react";
import NavTabs from "./NavTab";
import Legends from "./Legends";
import VeganIcon from "./../../assets/images/vegan-icon.svg";
import SpicyIcon from "./../../assets/images/spicy-icon.svg";
import VeggieKimbap from "./../../assets/images/menu/veggie_kimbap.png";
import KimchiKimbap from "./../../assets/images/menu/kimchi_kimbap.png";
import TunaKimbap from "./../../assets/images/menu/tuna_kimbap.png";
import BeefKimbap from "./../../assets/images/menu/beef_kimbap.png";
import NudeKimbap from "./../../assets/images/menu/nude_kimbap.png";
import SaladKimbap from "./../../assets/images/menu/salad_kimbap.png";
import CheeseKimbap from "./../../assets/images/menu/cheese_kimbap.png";
import MiniKimbap from "./../../assets/images/menu/finger_mini_kimbap.png";
import SquidKimbap from "./../../assets/images/menu/squid_kimbap.png";
import AnchovyKimbap from "./../../assets/images/menu/spicy_anchoby_kimbap.png";
import Ddukbokyi from "./../../assets/images/menu/ddukbokki.png";
import Kimmalyi from "./../../assets/images/menu/kim_mal_yi.png";
import Udon from "./../../assets/images/menu/udon.png";
import Ramen from "./../../assets/images/menu/ramen.png";
import FishCakeSoup from "./../../assets/images/menu/fishcake_soup.png";
import KimchiFriedRice from "./../../assets/images/menu/kimchi_fried_rice.png";
import ChickenFriedRice from "./../../assets/images/menu/chicken_fried_rice.png";
import ShrimpFriedRice from "./../../assets/images/menu/shrimp_fried_rice.png";
import Omurice from "./../../assets/images/menu/omurice.png";
import JeyookDupbap from "./../../assets/images/menu/jeyook_dupbap.png";
import BulgogiDupbap from "./../../assets/images/menu/bulgogi_dupbap.png";
import SquidDupbap from "./../../assets/images/menu/squid_dupbap.png";
import OctopusDupbap from "./../../assets/images/menu/octopus_dupbap.png";
import KimchiStew from "./../../assets/images/menu/kimchi_stew.png";
import SoybeanPasteStew from "./../../assets/images/menu/soybean_paste_stew.png";
import TofuStew from "./../../assets/images/menu/tofu_stew.png";
import YookGaeJang from "./../../assets/images/menu/yook_gae_jang.png";
import Bibimbap from "./../../assets/images/menu/bibimbap.png";
import StoneBowlBibimbap from "./../../assets/images/menu/stone_bowl_bibimbap.png";
import RiceCakeRamen from "./../../assets/images/menu/ricecake_ramen.png";
import DumplingRamen from "./../../assets/images/menu/dumpling_ramen.png";
import CheeseRamen from "./../../assets/images/menu/cheese_ramen.png";
import HangoverRamen from "./../../assets/images/menu/hangover_ramen.png";
import SujebiRamen from "./../../assets/images/menu/sujebi_ramen.png";
import JjamppongRamen from "./../../assets/images/menu/jjamppong_ramen.png";
import Jjolmyeon from "./../../assets/images/menu/jjolmyeon.png";
import ClamKalguksu from "./../../assets/images/menu/clam_kalguksu.png";
import KimchiKalguksu from "./../../assets/images/menu/kimchi_kalguksu.png";
import TempuraUdon from "./../../assets/images/menu/tempura_udon.png";
import JanchiGuksu from "./../../assets/images/menu/janchiguksu.png";
import KongGuksu from "./../../assets/images/menu/kongguksu.png";
import MulNaengmyun from "./../../assets/images/menu/mulnaengmyun.png";
import BibimNaengmyun from "./../../assets/images/menu/bibimnaengmyun.png";
import Rabokyi from "./../../assets/images/menu/rabokyi.png";
import Jjolbokyi from "./../../assets/images/menu/jjolbokyi.png";
import CheeseDdukbokyi from "./../../assets/images/menu/cheese_ddukbokyi.png";
import SquidTempura from "./../../assets/images/menu/squid_tempura.png";
import SteamedMeatDumpling from "./../../assets/images/menu/steamed_dumplings.png";
import FriedDumpling from "./../../assets/images/menu/fried_dumpling.png";
import Sujebi from "./../../assets/images/menu/sujebi.png";
import KimchiSujebi from "./../../assets/images/menu/kimchi_sujebi.png";
import RiceCakeSoup from "./../../assets/images/menu/rice_cake_soup.png";
import DumplingSoup from "./../../assets/images/menu/dumpling_soup.png";
import RiceCakeDumplingSoup from "./../../assets/images/menu/rice_cake_dumpling_soup.png";
import Donkatsu from "./../../assets/images/menu/donkatsu.png";
import ChickenKatsu from "./../../assets/images/menu/chicken_katsu.png";

import MenuItemCard from "./MenuItemCard";
import { Link as ScrollLink, LinkProps } from "react-scroll";
import MoveToTop from "../common/MoveToTop";

const MyComponent: React.FC = ({}) => {
  const legends = [
    { icon: VeganIcon, text: "Vegetarian option available" },
    { icon: SpicyIcon, text: "Spicy" },
  ];
  const kimbapItems = [
    {
      image: VeggieKimbap,
      label: "Veggie Kimbap",
      icon: VeganIcon,
      description:
        "Steamed rice with eggs, imitation crab stick, sweet radish, carrots, & spinach rolled in seaweed paper",
      price: "$6.50",
    },
    {
      image: KimchiKimbap,
      label: "Kimchi Kimbap",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description: "Veggie + Stir fried kimchi",
      price: "$7.99",
    },
    {
      image: TunaKimbap,
      label: "Tuna Kimbap",
      description: "Veggie + Tuna, mayonnaise, and perilla leaves",
      price: "$7.50",
    },
    {
      image: BeefKimbap,
      label: "Beef Kimbap",
      description: "Veggie + Bulgogi",
      price: "$7.99",
    },
    {
      image: NudeKimbap,
      label: "Nude Kimbap",
      icon: VeganIcon,
      description: "Inside out Veggie Kimbap",
      price: "$7.50",
    },
    {
      image: SaladKimbap,
      label: "Salad Kimbap",
      icon: VeganIcon,
      description: "Veggie + lettuce and mayonnaise",
      price: "$7.50",
    },
    {
      image: CheeseKimbap,
      label: "Cheese Kimbap",
      icon: VeganIcon,
      description: "Veggie + cheese",
      price: "$7.50",
    },
    {
      image: MiniKimbap,
      label: "Mini Kimbap",
      icon: VeganIcon,
      description: "Spinach & Carrot",
      price: "$7.99",
    },
    {
      image: SquidKimbap,
      label: "Squid Kimbap",
      icon: SpicyIcon,
      description: "Veggie + Spicy stir fried squid",
      price: "$7.99",
    },
    {
      image: AnchovyKimbap,
      label: "Spicy Anchovy Kimbap",
      icon: SpicyIcon,
      secondIcon: SpicyIcon,
      description: "Veggie + Anchovy & hot pepper.",
      price: "$8.50",
    },
  ];
  const comboItems = [
    {
      image: Ddukbokyi,
      secondImage: VeggieKimbap,
      label: "Ddukbokyi + Veggie Kimbap",
      icon: SpicyIcon,
      price: "$15.50",
    },
    {
      image: Ddukbokyi,
      secondImage: Kimmalyi,
      label: "Ddukbokyi + Kim Mal Yi",
      icon: SpicyIcon,
      price: "$15.50",
    },
    {
      image: Udon,
      secondImage: VeggieKimbap,
      label: "Udon + Veggie Kimbap",
      icon: VeganIcon,
      price: "$14.99",
    },
    {
      image: Ramen,
      secondImage: VeggieKimbap,
      label: "Ramen + Veggie Kimbap",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      price: "$13.99",
    },
    {
      image: Ddukbokyi,
      secondImage: VeggieKimbap,
      thirdImage: FishCakeSoup,
      label: "Ddukbokyi + Veggie Kimbap + Fish Cake Soup",
      icon: SpicyIcon,
      price: "$25.99",
    },

  ];
  const entreeItems = [
    {
      image: KimchiFriedRice,
      label: "Kimchi Fried Rice",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description:
        "Fried rice with kimchi, vegetables and ham topped with fried egg and seaweed flakes",
      price: "$12.99",
    },
    {
      image: ChickenFriedRice,
      label: "Chicken Fried Rice",
      description: "Fried rice with chicken and vegetables",
      price: "$13.50",
    },
    {
      image: ShrimpFriedRice,
      label: "Shrimp Fried Rice",
      description: "Fried rice with shrimp and vegetables",
      price: "$13.50",
    },
    {
      image: Omurice,
      label: "Omurice",
      icon: VeganIcon,
      description:
        "Fried rice with ham and vegetables wrapped in a thin layer of egg topped with ketchup",
      price: "$12.99",
    },
    {
      image: JeyookDupbap,
      label: "Jeyook Dupbap",
      icon: SpicyIcon,
      description:
        "Spicy stir-fried pork with vegetables served with steamed rice",
      price: "$14.50",
    },
    {
      image: BulgogiDupbap,
      label: "Bulgogi Dupbap",
      description:
        "Soy sauce marinated beef with vegetables served with steamed rice",
      price: "$17.50",
    },
    {
      image: SquidDupbap,
      label: "Squid Dupbap",
      icon: SpicyIcon,
      description:
        "Spicy stir-fried squid with vegetables served with steamed rice",
      price: "$14.50",
    },
    {
      image: OctopusDupbap,
      label: "Octopus Dupbap",
      icon: SpicyIcon,
      description:
        "Spicy stir-fried octopus with vegetables served with steamed rice",
      price: "$15.50",
    },
    {
      image: KimchiStew,
      label: "Kimchi Stew",
      icon: SpicyIcon,
      description:
        "Spicy kimchi stew with tofu, pork, spam, and vegetables served with steamed rice",
      price: "$13.99",
    },
    {
      image: SoybeanPasteStew,
      label: "Soybean Paste Stew",
      icon: VeganIcon,
      description:
        "Soy Bean Paste Stew with tofu, seafood, and vegetables served with steamed rice",
      price: "$13.99",
    },
    {
      image: TofuStew,
      label: "Tofu Stew",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description:
        "Spicy soft tofu stew with seafood and vegetables served with steamed rice",
      price: "$13.99",
    },
    {
      image: YookGaeJang,
      label: "Yook Gae Jang",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description: "Spicy beef soup with vegetables served with steamed rice",
      price: "$14.99",
    },
    {
      image: Bibimbap,
      label: "Bibimbap",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description:
        "Assorted vegetables, beef, fried egg, and seaweed flaskes served on rice with spicy pepper paste",
      price: "$12.99",
    },
    {
      image: StoneBowlBibimbap,
      label: "Stone Bowl Bibimbap",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description:
        "Assorted vegetables, beef, fried egg, and seaweed flaskes served on rice with spicy pepper paste in a sizzling hot stone pot",
      price: "$13.99",
    },
  ];
  const noodleItems = [
    {
      image: Ramen,
      label: "Ramen",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description: "Spicy Korean style ramen with egg and vegetables",
      price: "$9.99",
    },
    {
      image: RiceCakeRamen,
      label: "Rice Cake Ramen",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description: "Ramen + Rice cakes",
      price: "$10.99",
    },
    {
      image: DumplingRamen,
      label: "Dumpling Ramen",
      icon: SpicyIcon,
      description: "Ramen + Meat dumplings",
      price: "$10.99",
    },
    {
      image: CheeseRamen,
      label: "Cheese Ramen",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description: "Ramen + slices of American cheese",
      price: "$10.99",
    },
    {
      image: HangoverRamen,
      label: "Hangover Ramen",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description: "Ramen + Kimchi & Beansprouts",
      price: "$10.99",
    },
    {
      image: SujebiRamen,
      label: "Sujebi Ramen",
      icon: SpicyIcon,
      description: "Ramen + Hand torn dough flakes",
      price: "$10.99",
    },
    {
      image: JjamppongRamen,
      label: "Jjamppong Ramen",
      icon: SpicyIcon,
      description: "Ramen + seafood",
      price: "$12.50",
    },
    {
      image: Jjolmyeon,
      label: "Jjolmyeon",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description: "Cold spicy chewy noodles with vegetables & egg ",
      price: "$12.50",
    },
    {
      image: ClamKalguksu,
      label: "Clam Kalguksu",
      icon: VeganIcon,
      description: "Knife-cut noodle soup with clam & vegetables ",
      price: "$12.50",
    },
    {
      image: KimchiKalguksu,
      label: "Kimchi Kalguksu",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description: "Knife-cut noodle soup with kimchi, clam & vegetables ",
      price: "$12.99",
    },
    {
      image: Udon,
      label: "Udon",
      icon: VeganIcon,
      description:
        "Japanese style noodle soup with fishcakes and vegetables. Topped with seaweed flakes",
      price: "$11.50",
    },
    {
      image: TempuraUdon,
      label: "Tempura Udon",
      icon: VeganIcon,
      description: "Udon topped with vegetable tempura",
      price: "$11.99",
    },
    {
      image: JanchiGuksu,
      label: "Janchi Guksu",
      icon: VeganIcon,
      description:
        "Warm noodle soup in anchovy broth with vegetables, egg, and seaweed flakes",
      price: "$12.99",
    },
    {
      image: KongGuksu,
      label: "Kong-Guksu",
      icon: VeganIcon,
      description:
        "Noodles in cold soup made from ground soy bean, sesame, and pine nut topped with egg and cucumber",
      price: "$12.99",
    },
    {
      image: MulNaengmyun,
      label: "Mul Naengmyun",
      description:
        "Buckwheat noodle in cold beef broth. Topped with beef, egg, and vegetables",
      price: "$12.50",
    },
    {
      image: BibimNaengmyun,
      label: "Bibim Naengmyun",
      icon: SpicyIcon,
      description:
        "Buckwheat noodle in cold beef broth. Topped with spicy sauce, beef, egg, and vegetables",
      price: "$12.99",
    },
  ];
  const boonsikItems = [
    {
      image: Ddukbokyi,
      label: "Ddukbokyi",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description:
        "Korean style spicy rice cakes with fishcakes, egg, and vegetables",
      price: "$12.50",
    },
    {
      image: Rabokyi,
      label: "Rabokyi",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description: "Ddukbokyi with ramen noodles",
      price: "$13.99",
    },
    {
      image: Jjolbokyi,
      label: "Jjolbokyi",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description: "Ddukbokyi with chewy noodles",
      price: "$13.99",
    },
    {
      image: CheeseDdukbokyi,
      label: "Cheese Ddukbokyi",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description: "Ddukbokyi with cheese",
      price: "$13.50",
    },
    {
      image: Kimmalyi,
      label: "Kimmalyi",
      icon: VeganIcon,
      description: "Fried seaweed rolls filled with glass noodles ",
      price: "$5.99 (4pc) $11.99 (8pc)",
    },
    {
      image: SquidTempura,
      label: "Squid Tempura",
      description: "Fried squid",
      price: "$12.99",
    },
    {
      image: SteamedMeatDumpling,
      label: "Steamed Meat Dumplings",
      description: "Pork, beef, vegetables, and glass noodles (9 pcs)",
      price: "$11.99",
    },
    {
      image: FriedDumpling,
      label: "Fried Dumplings",
      description: "Fried meat dumplings (9 pcs)",
      price: "$5.99 (4pc) $11.99 (8pc)",
    },
    {
      image: FishCakeSoup,
      label: "Fishcake Soup",
      description: "Fishcakes and vegetables",
      price: "$11.99",
    },
    {
      image: Sujebi,
      label: "Sujebi",
      icon: VeganIcon,
      description:
        "Handtorn dough flake soup with clam, potatoes, and vegetables",
      price: "$12.50",
    },
    {
      image: KimchiSujebi,
      label: "Kimchi Sujebi",
      icon: VeganIcon,
      secondIcon: SpicyIcon,
      description:
        "Handtorn dough flake soup with kimchi, clam, potatoes, and vegetables",
      price: "$12.99",
    },
    {
      image: RiceCakeSoup,
      label: "Rice Cake Soup",
      icon: VeganIcon,
      description:
        "Sliced rice cake soup with egg, glass noodles, and vegetables. Topped with seaweed flakes",
      price: "$11.99",
    },
    {
      image: DumplingSoup,
      label: "Dumpling Soup",
      description:
        "Meat dumpling soup with egg, glass noodles, and vegetables. Topped with seaweed flakes",
      price: "$12.99",
    },
    {
      image: RiceCakeDumplingSoup,
      label: "Rice Cake Dumpling Soup",
      description:
        "Sliced rice cake soup with meat dumplings, glass noodles, eggs, and vegetables. Topped with seaweed flakes",
      price: "$12.99",
    },
    {
      image: Donkatsu,
      label: "Donkatsu",
      description: "Fried pork cutlet served with sauce, rice, and salad",
      price: "$14.99",
    },
    {
      image: ChickenKatsu,
      label: "Chicken Katsu",
      description: "Fried chicken cutlet served with sauce, rice, and salad",
      price: "$14.99",
    },
  ];

  return (
    <div className="menu">
      <NavTabs
        links={[
          { href: "/menu#kimbap", label: "Kimbap" },
          { href: "/menu#entree", label: "Entree" },
          { href: "/menu#noodle", label: "Noodles" },
          { href: "/menu#boonsik", label: "Boonsik" },
          { href: "/menu#special-combo", label: "Special Combo" },
        ]}
      />
      <div className="menu-content">
        <Legends items={legends} />
        <section id="kimbap">
          <h3>Kimbap</h3>
          <p>
            “Kimbap” (김밥)  is a popular Korean dish that consists of seaweed
            rice rolls filled with various ingredients. The name "kimbap"
            translates to "seaweed rice" in Korean. This dish is often
            considered the Korean version of sushi, but it has its own distinct
            flavors and ingredients.
          </p>
          <MenuItemCard items={kimbapItems} />
        </section>
        <section id="entree">
          <h3>Entree</h3>
          <p>
            Our entree section consists of a variety of "Hansik" (한식) items
            which refers to traditional Korean cuisine. It encompasses a rich
            variety of dishes that have evolved over centuries, influenced by
            the unique geography, climate, and cultural history of the Korean
            Peninsula. Hansik is known for its emphasis on balance, color, and
            seasonality, as well as its use of diverse ingredients.
          </p>
          <MenuItemCard items={entreeItems} />
        </section>
        <section id="noodle">
          <h3>Noodles</h3>
          <p>
            Indulge in the rich and savory world of Korean noodle dishes, where
            every bite is a balance of comfort and flavor. From variations of
            the widely loved Korean style ramen to the refreshing and tangy bite
            of our chilled noodles like Mul Naengmyeon and Bibim Naengmyeon,
            there's something for every craving. Whether you're in the mood for
            a hearty, steaming bowl or a cool, invigorating meal, our noodle
            selection, made with fresh ingredients and traditional recipes,
            brings the best of Korea’s noodle dishes to your table.
          </p>
          <MenuItemCard items={noodleItems} />
        </section>
        <section id="boonsik">
          <h3>Boonsik</h3>
          <p>
            "Boonsik" (분식) refers to a category of Korean street food that
            includes various snacks and light meals. Boonsik is a combination of
            two Korean words: "bun" (분), meaning powder or flour, and "sik"
            (식), meaning food. These snacks are often affordable, quick to
            prepare, and popular among people of all ages.
          </p>
          <MenuItemCard items={boonsikItems} />
        </section>
        <section id="special-combo">
          <h3>Special Combo</h3>
          <MenuItemCard items={comboItems} columns={1} />
        </section>
      </div>
      <MoveToTop />
    </div>
  );
};

export default MyComponent;
