import React, { useState } from "react";
import {
  Image,
  Grid,
  Segment,
  Divider
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../styles/MobileCategories.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const categories = [
  { id: 1, name: "Endüstriyal Otomasyon", icon: "/images/automation-cat.jpg" },
  { id: 2, name: "Endüstriyal Isı Kontrol", icon: "/images/ısı-kontrol.png" },
  { id: 3, name: "Endüstriyal Isıtma", icon: "/images/ısıtma.jpg" },
  { id: 4, name: "UV Kontrol", icon: "/images/uv-kontrol.png" },
  { id: 5, name: "Bütün Ürünler", icon: "/images/yenilikçi4.jpg" },
  { id: 6, name: "2. El Ürünler", icon: "/images/microsoft-clippy.jpg" }
];

const subCategoryMap = {
  1: [
    {
      id: 0,
      name: "Tümü",
      image: "/images/categorize.jpg",
      link: "/products?categoryId=1"
    },
    {
      id: 3,
      name: "Sürücüler",
      image: "/images/sürücüler.jpg",
      link: "/products?categoryId=1&subcategoryId=3"
    },
    {
      id: 1,
      name: "PLC",
      image: "/images/PLCLER.png",
      link: "/products?categoryId=1&subcategoryId=1"
    },
    {
      id: 2,
      name: "Ekran",
      image: "/images/HMILAR.jpg",
      link: "/products?categoryId=1&subcategoryId=2"
    },
    {
      id: 4,
      name: "Güç Kaynağı",
      image: "/images/gückaynagi.jpg",
      link: "/products?categoryId=1&subcategoryId=4"
    },
    {
      id: 5,
      name: "Soft Starter",
      image: "/images/softstarter.png",
      link: "/products?categoryId=1&subcategoryId=5"
    }
  ],
  2: [
    {
      id: 6,
      name: "Tümü",
      image: "/images/categorize.jpg",
      link: "/products?categoryId=2"
    },
    {
      id: 7,
      name: "Termostat",
      image: "/images/termostatlar.png",
      link: "/products?categoryId=2&subcategoryId=6"
    },
    {
      id: 8,
      name: "Power Regulatör",
      image: "/images/powerregulator.png",
      link: "/products?categoryId=2&subcategoryId=7"
    },
    {
      id: 9,
      name: "SSR",
      image: "/images/ssrler.jpg",
      link: "/products?categoryId=2&subcategoryId=8"
    },
    {
      id: 10,
      name: "Termokupl",
      image: "/images/termokupl.jpg",
      link: "/products?categoryId=2&subcategoryId=9"
    }
  ],
  3: [
    {
      id: 0,
      name: "Tümü",
      image: "/images/categorize.jpg",
      link: "/products?categoryId=3"
    },
    {
      id: 11,
      name: "Rezistanslar",
      image: "/images/rezistanslar.png",
      link: "/products?categoryId=3&subcategoryId=10"
    },
    {
      id: 12,
      name: "IR Lambalar",
      image: "/images/ir-labma.jpg",
      link: "/products?categoryId=3&subcategoryId=11"
    },
    {
      id: 13,
      name: "İnfrared Lambalar",
      image: "/images/infrared-labma.jpg",
      link: "/products?categoryId=3&subcategoryId=12"
    },
    {
      id: 14,
      name: "Quartz Lambalar",
      image: "/images/quartz-lamba.jpg",
      link: "/products?categoryId=3&subcategoryId=13"
    },
    {
      id: 15,
      name: "Seramik Yansıtıcılar",
      image: "/images/seramik-yansitici.jpg",
      link: "/products?categoryId=3&subcategoryId=14"
    }
  ],
  4: [
    {
      id: 0,
      name: "Tümü",
      image: "/images/categorize.jpg",
      link: "/products?categoryId=4"
    },
    {
      id: 16,
      name: "UV Lamba",
      image: "/images/uv-lamba.jpg",
      link: "/products?categoryId=4&subcategoryId=15"
    },
    {
      id: 17,
      name: "UV Kabin",
      image: "/images/uv-kabin.png",
      link: "/products?categoryId=4&subcategoryId=16"
    },
    {
      id: 18,
      name: "UV Kontrol Panosu",
      image: "/images/uv-pano.png",
      link: "/products?categoryId=4&subcategoryId=17"
    }
  ],
  5: [
    {
      id: 19,
      name: "Bütün Ürünler",
      image: "/images/categorize.jpg",
      link: "/products"
    }
  ],
  6: [
    {
      id: 20,
      name: "2. EL",
      image: "/images/categorize.jpg",
      link: "/products/secondhand"
    }
  ]
};

export default function MobileCategories() {
  const [activeCategory, setActiveCategory] = useState(1);

  const activeSubCategories = subCategoryMap[activeCategory] || [];

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", paddingBottom: "250px" }}>

      <div className="category-scroll" style={{ paddingTop: "0px" }}>
        {categories.map(cat => (
            <div
                key={cat.id}
                className={`category-item ${
                    activeCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
                >
                <div className="category-circle">
                    <img src={cat.icon} alt="" />
                </div>

                <div className="category-label">
                    {cat.name}
                </div>
            </div>
        ))}
      </div>

        <Divider />

    <h3 style={{ padding: "0 16px" }}>
        {categories.find(c => c.id === activeCategory)?.name}
    </h3>   

      {/* 🧱 Subcategory Grid */}
      <Grid columns={3} padded>
  {activeSubCategories.map(sub => (
    <Grid.Column key={sub.id}>
      <Segment
        as={Link}
        to={sub.link}
        basic
        textAlign="center"
        className="subcategory-card"
      >
        <div className="subcategory-image-wrapper">
            <Image
            src={sub.image}
            alt={sub.image}
            className="subcategory-image"
            centered
            />
        </div>
        
        <div className="subcategory-label">
            {sub.name}
        </div>
      </Segment>
    </Grid.Column>  
  ))}
</Grid>
    </div>
  );
}   