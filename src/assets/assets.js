import banner_video from "./banner_video.mp4";
import profile_pic from './profile_pic.jpg'
import contact_video from './contact_video.mp4'
import about_image from './about_image.jpg'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.jpg'
import doc2 from './doc2.jpg'
import doc3 from './doc3.jpg'
import doc4 from './doc4.jpg'
import doc5 from './doc5.jpg'
import doc6 from './doc6.jpg'
import doc7 from './doc7.jpg'
import doc8 from './doc8.jpg'
import doc9 from './doc9.jpg'
import doc10 from './doc10.jpg'
import doc11 from './doc11.jpg'
import doc12 from './doc12.jpg'
import doc13 from './doc13.jpg'
import doc14 from './doc14.jpg'
import doc15 from './doc15.jpg'
import doc16 from './doc16.jpg'
import doc17 from './doc17.jpg'
import doc18 from './doc18.jpg'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import hero_video from "./hero_video.mp4";
import elderly from "./elderly.jpg";
import pediatrics from "./pediatrics.jpg";
import team from "./team.jpg";
import review1 from "./Review_1.jpg";
import review2 from "./Review_2.jpg";
import review3 from "./Review_3.jpg";
import mission_video from "./mission_video.mp4";
import loginVideo from "./loginVideo.mp4";

export const assets = {
    banner_video,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_video,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    hero_video,
    elderly,
    pediatrics,
    team,
    review1,
    review2,
    review3,
    mission_video,
    loginVideo,
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Andrew Cooper',
        image: doc1,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '7 Years',
        about: 'Known for his analytical approach and attention to detail, Dr. Andrew Cooper helps patients manage complex neurological conditions through personalized treatment plans and continuous support.',
        fees: 65,
        available: true,
        phone: "+44 20 7946 1845",
        email: "andrew.cooper@carepointclinic.com",
        address: {
            line1: '18 Baker Street',
            line2: 'Marylebone, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Carter',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '5 Years',
        about: "Dr. Emily Carter is dedicated to providing comprehensive women's healthcare in a respectful and comfortable environment. She specializes in reproductive health, prenatal care, and preventive gynecological services.",
        fees: 60,
        available: true,
        phone: "+44 20 7834 5621",
        email: "emily.carter@carepointclinic.com",
        address: {
            line1: '42 Kensington High Street',
            line2: 'Kensington, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Maria Santos',
        image: doc3,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '4 Years',
        about: "Dr. Maria Santos enjoys helping children grow up healthy and happy. She works closely with families to provide compassionate pediatric care tailored to every child's needs.",
        fees: 58,
        available: true,
        phone: "+44 20 7482 1937",
        email: "maria.santos@carepointclinic.com",
        address: {
            line1: '48 Hammersmith Road',
            line2: 'Hammersmith, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Michael Johnson',
        image: doc4,
        speciality: 'General Physician',
        degree: 'MBBS, MD',
        experience: '15 Years',
        about: "With over fifteen years of experience, Dr. Michael Johnson specializes in diagnosing and managing chronic diseases. His patient-first philosophy has earned the trust of countless families.",
        fees: 40,
        available: true,
        phone: "+44 20 7628 4519",
        email: "michael.johnson@carepointclinic.com",
        address: {
            line1: '42 Kensington High Street',
            line2: 'Kensington, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Ethan Carter',
        image: doc5,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '12 Years',
        about: "Dr. Ethan Carter has dedicated his career to family medicine, providing personalized healthcare for patients of all ages. He believes that preventive care and healthy lifestyle choices are the key to long-term wellness.",
        fees: 55,
        available: true,
        phone: "+44 20 7359 8126",
        email: "ethan.carter@carepointclinic.com",
        address: {
            line1: '18 Baker Street',
            line2: 'Marylebone, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Tan Jun Hao',
        image: doc6,
        speciality: 'Pediatrician',
        degree: 'MBBS, MMed',
        experience: '12 Years',
        about: "Dr. Tan Jun Hao is passionate about child healthcare and preventive medicine. He believes every child deserves compassionate, family-centered care.",
        fees: 70,
        available: true,
        phone: "+44 20 7781 2645",
        email: "tan.jun.hao@carepointclinic.com",
        address: {
            line1: '39 Brixton Hill',
            line2: 'Brixton, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Nguyen Minh Khoa',
        image: doc7,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '9 Years',
        about: "Dr. Nguyen Minh Khoa specializes in digestive diseases and preventive gastrointestinal care. He values clear communication and personalized treatment plans.",
        fees: 65,
        available: true,
        phone: "+44 20 7465 9371",
        email: "nguyen.minh.khoa@carepointclinic.com",
        address: {
            line1: '91 Chiswick High Road',
            line2: 'Chiswick, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Sophia Turner',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '8 Years',
        about: "Dr. Sophia Turner believes in empowering women through education and preventive healthcare. She is dedicated to delivering personalized treatment with compassion.",
        fees: 60,
        available: true,
        phone: "+44 20 7548 6823",
        email: "sophia.turner@carepointclinic.com",
        address:{
            line1:"35 Putney High Street",
            line2:"Putney, London"
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Zhang Wei',
        image: doc9,
        speciality: 'Neurologist',
        degree: 'MBBS, PhD',
        experience: '16 Years',
        about: "Dr. Zhang Wei is highly experienced in treating disorders of the nervous system. He combines advanced medical techniques with compassionate patient care.",
        fees: 90,
        available: true,
        phone: "+44 20 7896 1457",
        email: "zhang.wei@carepointclinic.com",
        address:{
            line1:"24 Richmond Hill",
            line2:"Richmond, London"
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Kevin Thompson',
        image: doc10,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '7 Years',
        about: "Dr. Kevin Thompson provides modern dermatological care using evidence-based treatments. He enjoys helping patients restore confidence in their skin.",
        fees: 40,
        available: true,
        phone: "+44 20 7692 5384",
        email: "kevin.thompson@carepointclinic.com",
        address:{
            line1:"73 Finchley Road",
            line2:"Hampstead, London"
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Brian Anderson',
        image: doc11,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MRCP',
        experience: '13 Years',
        about:"Dr. Brian Anderson focuses on digestive health and preventive gastrointestinal care. He is dedicated to helping patients achieve lasting wellness.",
        fees: 75,
        available: true,
        phone: "+44 20 7817 4926",
        email: "brian.anderson@carepointclinic.com",
        address:{
            line1:"102 Holloway Road",
            line2:"Islington, London"
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Chinedu Okafor',
        image: doc12,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '11 Years',
        about: "Dr. Chinedu Okafor is committed to helping patients achieve healthier skin through personalized dermatological care. He focuses on both treatment and prevention.",
        fees: 72,
        available: true,
        phone: "+44 20 7583 1749",
        email: "chinedu.okafor@carepointclinic.com",
        address:{
            line1:"63 Ealing Broadway",
            line2:"Ealing, London"
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Arjun Mehta',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS, MD (Cardiology)',
        experience: '13 Years',
        about: "Dr. Arjun Mehta is an experienced cardiologist dedicated to preventing and treating heart diseases through modern medical practices. He is passionate about helping patients maintain a healthy heart by combining advanced diagnostics, personalized treatment plans, and lifestyle guidance.",
        fees: 65,
        available: true,
        phone: "+44 20 7746 8513",
        email: "arjun.mehta@carepointclinic.com",
        address: {
            line1: "72 Canary Wharf",
            line2: "Tower Hamlets, London"
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Yuki Nakamura',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, PhD',
        experience: '11 Years',
        about: "Dr. Yuki Nakamura specializes in diagnosing and treating neurological disorders with a patient-centered approach. She is committed to providing compassionate care while using the latest medical advancements to improve patients' quality of life.",
        fees: 78,
        available: true,
        phone: "+44 20 7391 6258",
        email: "yuki.nakamura@carepointclinic.com",
        address: {
            line1: "31 South Bank",
            line2: "Lambeth, London"
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Adaeze Okonkwo',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '9 Years',
        about: "Dr. Adaeze Okonkwo specializes in treating a wide range of skin conditions while promoting healthy skincare habits. She is known for her patient-centered and compassionate approach.",
        fees: 66,
        available: true,
        phone: "+44 20 7854 3169",
        email: "adaeze.okonkwo@carepointclinic.com",
        address:{
            line1:"16 Clapham Common South Side",
            line2:"Clapham, London"
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Daniel Brooks',
        image: doc16,
        speciality: 'General Physician',
        degree: 'MBBS, PhD',
        experience: '25 Years',
        about: "Dr. Daniel Brooks enjoys helping patients improve their overall health through preventive medicine and early diagnosis. He focuses on building long-term relationships with every patient.",
        fees: 85,
        available: true,
        phone: "+44 20 7675 9482",
        email: "daniel.brooks@carepointclinic.com",
        address:{
            line1:"15 Oxford Street",
            line2:"Westminster, London"
        }
    },
    {
        _id: "doc17",
        name: "Dr. Jessica Williams",
        image: doc17,
        speciality: "Dermatologist",
        degree: "MBBS, MD (Cardiology)",
        experience: "9 Years",
        about: "Dr. Jessica Williams is a dedicated cardiologist with a passion for helping patients maintain healthy hearts through early diagnosis, advanced treatment, and preventive care. She believes in building strong relationships with her patients and creating personalized treatment plans that promote long-term cardiovascular health.",
        fees: 65,
        available: true,
        phone: "+44 20 7438 5216",
        email: "jessica.williams@carepointclinic.com",
        address: {
            line1: "54 Regent Street",
            line2: "Westminster, London"
        }
    },
    {
        _id: 'doc18',
        name: 'Dr. Lim Wei Jian',
        image: doc18,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '8 Years',
        about: "Dr. Lim Wei Jian enjoys caring for children from infancy through adolescence. His friendly approach helps young patients feel comfortable during every visit.",
        fees: 60,
        available: true,
        phone: "+44 20 7926 8145",
        email: "lim.weijian@carepointclinic.com",
        address:{
            line1:"56 Whitechapel Road",
            line2:"Whitechapel, London"
        }
    },
]