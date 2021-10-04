const data = [
    {
      name: "Foundation Courses",
      instructor: "Phoenix Montoya",
      time: "8 months",
      id: 1,
      intro: "In this courses structure students of school levels,up to class X are rendered coaching in all subjects",
      img: "https://e4b6rqtxami.exactdn.com/wp-content/uploads/2020/11/Free-Online-foundation-course-on-choaching-psychotherapy.png?strip=all&lossy=1&ssl=1",
      basic: {
        fee: 300,
        classduration: "1 hour/day",
        img: "https://www.pramji.com/wp-content/uploads/basic.jpg"
      },
      intermediate: {
        fee: 400,
        classduration: "1.5 hour/day",
        img: "https://sportsgroundproduction.blob.core.windows.net/cms/7080/54595/417172/9f428246-9629-43f3-a7ef-1acb05cc74d7_wo.jpg"
      },
      Advance: {
        fee: 500,
        classduration: "2 hours/day",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yQWcg4WpE-z1DVQtWtpwyI-_rtl589o8hw&usqp=CAU"
      },
    },
    {
      name: "Medical Courses",
      instructor: "Valery Dennis",
      time: "1 year",
      id: 2,
      intro: "Students of class XI and XII are prepared for entrances.Also medical students are given regular coaching.",
      img: "https://leverageedu.com/blog/wp-content/uploads/2019/08/Medical-Courses-Without-NEET.jpg",
          basic: {
            fee: 600,
            classduration: "1 hour/day",
            img: "https://www.pramji.com/wp-content/uploads/basic.jpg"
          },
          intermediate: {
            fee: 800,
            classduration: "1.5 hour/day",
            img: "https://sportsgroundproduction.blob.core.windows.net/cms/7080/54595/417172/9f428246-9629-43f3-a7ef-1acb05cc74d7_wo.jpg"
          },
          Advance: {
            fee: 1200,
            classduration: "2 hours/day",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yQWcg4WpE-z1DVQtWtpwyI-_rtl589o8hw&usqp=CAU"
          },
    },
    {
      name: "Engineering Courses",
      instructor: "Natalee Wilson",
      time: "1 years",
      id: 3,
      intro: "Students of class XI and XII are prepared for entrances.Also Engineering students are given regular coaching.",
      img: "https://leverageedu.com/blog/wp-content/uploads/2019/12/Best-Engineering-Courses-for-Future.png",
          basic: {
            fee: 500,
            classduration: "1 hour/day",
            img: "https://www.pramji.com/wp-content/uploads/basic.jpg"
          },
          intermediate: {
            fee: 700,
            classduration: "1.5 hour/day",
            img: "https://sportsgroundproduction.blob.core.windows.net/cms/7080/54595/417172/9f428246-9629-43f3-a7ef-1acb05cc74d7_wo.jpg"
          },
          Advance: {
            fee: 1100,
            classduration: "2 hours/day",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yQWcg4WpE-z1DVQtWtpwyI-_rtl589o8hw&usqp=CAU"
          }
    },
    {
      name: "Management Courses",
      instructor: "Kai Bennett",
      time: "9 months",
      id: 4,
      intro: "A spirants school and colleges are prepared for entrances.Regular management students are given regular subject coaching.",
      img: "https://www.cgc.edu.in//public/uploads/blogs/59d4f8ae6ac10b6ed4d3c334b43c497a.jpg",
          basic: {
            fee: 400,
            classduration: "1 hour/day",
            img: "https://www.pramji.com/wp-content/uploads/basic.jpg"
          },
          intermediate: {
            fee: 500,
            classduration: "1.5 hour/day",
            img: "https://sportsgroundproduction.blob.core.windows.net/cms/7080/54595/417172/9f428246-9629-43f3-a7ef-1acb05cc74d7_wo.jpg"
          },
          Advance: {
            fee: 800,
            classduration: "2 hours/day",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yQWcg4WpE-z1DVQtWtpwyI-_rtl589o8hw&usqp=CAU"
          }
    },
    {
      name: "Professional Courses",
      instructor: "Zachary Poole",
      time: "8 months",
      id: 5,
      intro: "We all want to excellent jobs in our lives.with the inclution of professional courses to the path becomes easy and demanding.",
      img: "https://leverageedu.com/blog/wp-content/uploads/2019/11/Professional-Courses-after-12th-Commerce-Stream.jpg",
          basic: {
            fee: 500,
            classduration: "1 hour/day",
            img: "https://www.pramji.com/wp-content/uploads/basic.jpg"
          },
          intermediate: {
            fee: 800,
            classduration: "1.5 hour/day",
            img: "https://sportsgroundproduction.blob.core.windows.net/cms/7080/54595/417172/9f428246-9629-43f3-a7ef-1acb05cc74d7_wo.jpg"
          },
          Advance: {
            fee: 1200,
            classduration: "2 hours/day",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yQWcg4WpE-z1DVQtWtpwyI-_rtl589o8hw&usqp=CAU"
          }
    },
    {
      name: "Competitive Courses",
      instructor: "Ross Barry",
      time: "6 months",
      id: 6,
      intro: "Competion is on live for securing a grand career.We offer exceellent coaching to excel in the competitive exams",
      img: "https://lh3.googleusercontent.com/proxy/u_E3KOd42nMaOy9hJs52dKu6gE1YBNjIQAKypTORug88IBbJfAJWUIx9Hlh-B05bUcMrZXk-GpbRf7YbtMOwJWwIrRcB07ulIB6A0-cn3BJekn_SF1PTx8tkg97QRA",
          basic: {
            fee: 600,
            classduration: "1 hour/day",
            img: "https://www.pramji.com/wp-content/uploads/basic.jpg"
          },
          intermediate: {
            fee: 900,
            classduration: "1.5 hour/day",
            img: "https://sportsgroundproduction.blob.core.windows.net/cms/7080/54595/417172/9f428246-9629-43f3-a7ef-1acb05cc74d7_wo.jpg"
          },
          Advance: {
            fee: 1100,
            classduration: "2 hours/day",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yQWcg4WpE-z1DVQtWtpwyI-_rtl589o8hw&usqp=CAU"
          },
]