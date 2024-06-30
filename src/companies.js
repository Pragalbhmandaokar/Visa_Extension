const companies = [
  {
    key: 201,
    name: "Retail products",
    score: 40,
    url: "https://www.abc-mart.net/shop/",
  },
  {
    key: 202,
    name: "Food Products",
    score: 67.3,
    url: "https://www.adaniwilmar.com/",
    information:
      "Adani Wilmar Ltd is an FMCG food company offering most of the essential kitchen commodities for Indian consumers, including edible oil, wheat flour, rice, pulses, and sugar. The company also offers a diverse range of industry essentials, including oleochemicals, castor oil and its derivatives, and de-oiled cakes. The company's products are offered under a diverse range of brands across a broad price spectrum and cater to different customer groups. The company sells an entire range of packed products under the following brands: Fortune, King’s, Raag, Bullet, Fryola, Jubilee, Aadhaar, and VIVO.",
  },
  {
    key: 203,
    name: "Food Products",
    score: 69.1,
    url: "https://www.agthia.com/",
    information:
      "agthia Ltd is an FMCG food company offering most of the essential kitchen commodities for Indian consumers, including edible oil, wheat flour, rice, pulses, and sugar. The company also offers a diverse range of industry essentials, including oleochemicals, castor oil and its derivatives, and de-oiled cakes. The company's products are offered under a diverse range of brands across a broad price spectrum and cater to different customer groups. The company sells an entire range of packed products under the following brands: Fortune, King’s, Raag, Bullet, Fryola, Jubilee, Aadhaar, and VIVO.",
  },
  {
    key: 204,
    name: "Food Products",
    score: 52.6,
    url: "https://www.aljouf.com.sa/home",
    information:
      "aljouf Ltd is an FMCG food company offering most of the essential kitchen commodities for Indian consumers, including edible oil, wheat flour, rice, pulses, and sugar. The company also offers a diverse range of industry essentials, including oleochemicals, castor oil and its derivatives, and de-oiled cakes. The company's products are offered under a diverse range of brands across a broad price spectrum and cater to different customer groups. The company sells an entire range of packed products under the following brands: Fortune, King’s, Raag, Bullet, Fryola, Jubilee, Aadhaar, and VIVO.",
  },
  {
    key: 205,
    name: "Food Products",
    score: 52.6,
    url: "https://www.coca-colahellenic.com/",
    information:
      "Coca-Cola HBC is the third-largest bottling partner in the Coca-Cola system by volume, behind Coca-Cola FEMSA and Coca-Cola Europacific Partners. In 2023, CCHBC sold 2.8 billion unit cases of beverages. For context, Coke’s largest bottler, Coke FEMSA, sold 4 billion unit cases in Latin America, and the second-largest—CCEP, serving Europe, Southeast Asia, and the South Pacific region—sold 3.3 billion unit cases. There is a long tail of Coke distributors, including brewers and independent operators with very small distribution territories.CCHBC is listed on the London Stock Exchange. Kar-Tess, a Luxembourg-based holding company, owns 23% of the equity of CCHBC, and Coca-Cola holds a further 21%. The remaining 56% is free float.",
  },
  {
    key: 206,
    name: "Food Products",
    score: 58,
    url: "https://www.calmainefoods.com/",
    information:
      "Coca-Cola HBC is the third-largest bottling partner in the Coca-Cola system by volume, behind Coca-Cola FEMSA and Coca-Cola Europacific Partners. In 2023, CCHBC sold 2.8 billion unit cases of beverages. For context, Coke’s largest bottler, Coke FEMSA, sold 4 billion unit cases in Latin America, and the second-largest—CCEP, serving Europe, Southeast Asia, and the South Pacific region—sold 3.3 billion unit cases. There is a long tail of Coke distributors, including brewers and independent operators with very small distribution territories.CCHBC is listed on the London Stock Exchange. Kar-Tess, a Luxembourg-based holding company, owns 23% of the equity of CCHBC, and Coca-Cola holds a further 21%. The remaining 56% is free float.",
  },
  {
    key: 206,
    name: "Retail products",
    score: 86.5,
    url: "https://www.adidas-group.com/en/",
    information:
      "Adidas designs, develops, produces, and markets athletic and leisure apparel, footwear, accessories, and sports equipment.",
  },
  {
    key: 207,
    name: "Retail products",
    score: 81.7,
    url: "https://www.allbirds.co.uk/?gad_source=1&gclid=CjwKCAjw1emzBhB8EiwAHwZZxQIh562LiQZql-sUdkuS5jFD_uwJOWIEGKARdAmhsLAqS7gz9p5tYBoCHcUQAvD_BwE&utm_campaign=Search%20%2F%2F%20UK%20%2F%2F%20Allbirds%20Brand%20%2F%2F%20Prospecting%20%2F%2F%20Low-Funnel&utm_content=597389103511&utm_medium=cpc&utm_source=google&utm_term=",
    information:
      "Allbirds Inc is a lifestyle brand that innovates with naturally derived materials to make footwear and apparel products in a better way, while treading lighter on the planet.",
  },
  {
    key: 208,
    name: "Retail products",
    score: 83.6,
    url: "https://www.canadagoose.com/uk/en_UK/home-page",
    information:
      "Canada Goose Holdings Inc is a Canada-based company that designs, manufactures, distributes, and retails premium outerwear for men, women, and children",
  },
  {
    key: 209,
    name: "Retail products",
    score: 84.9,
    url: "https://www.deltagalil.com/",
    information:
      "Delta Galil Industries Ltd designs and manufactures undergarments, socks, children's wear, leisurewear, and activewear.",
  },
  {
    key: 210,
    name: "Retail products",
    score: 81.2,
    url: "https://gocolors.com/",
    information:
      "Go Fashion (India) Ltd is engaged in the development, design, sourcing, marketing, and retailing of a range of women's bottom-wear products under the brand, 'Go Colors'",
  },
  {
    key: 211,
    name: "Retail products",
    score: 86,
    url: "https://www.ralphlauren.co.uk/?ab=Geo_iUK_rUS_dUK&locale=en_GB",
    information:
      "Founded by designer Ralph Lauren in 1967 in New York City, Ralph Lauren Corp. designs, markets, and distributes lifestyle products in North America, Europe, and Asia. Its products include apparel, footwear, eyewear, jewelry, handbags, home goods, and fragrances.",
  },
  {
    key: 212,
    name: "Retail products",
    score: 79,
    url: "https://www.campusactivewear.com/",
    information:
      "Campus Activewear Ltd is a sports and athleisure footwear brand. The company manufactures and distributes a variety of footwear like Running Shoes, Walking Shoes, Casual Shoes, Floaters, Slippers, Flip Flops, and Sandals, available in multiple colors, and styles and at affordable prices.",
  },
];

export default companies;
