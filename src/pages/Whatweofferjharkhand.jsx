

import React, { useState } from 'react';
import './Whatweofferjharkhand.css';

import sohraiCanvas from "./jharkhandimage/shorahihandpainting.jpeg";
import kohbarFrame from "./jharkhandimage/kohabrframe.jpeg";
import tribalMotif from './jharkhandimage/tribalmofti.jpeg';
import tribalShawl from './jharkhandimage/triblasall.jpg';

import tussarSaree from "./jharkhandimage/tusarsharee.jpeg";
import handloomDupatta from "./jharkhandimage/handloomduppata.jpeg";

import salLeafPlate from "./jharkhandimage/sellleafproduct.jpeg";
import mahuaFlower from "./jharkhandimage/mahua.jpeg";
import wallhangining from './jharkhandimage/wallhangining.jpeg'

import bambooBasket from './jharkhandimage/bambbobasket.webp';
import forestHoney from './jharkhandimage/foresthonney.jpg';
import karmaPoojaThali from './jharkhandimage/karmapujjathali.jpeg'
import naturalOil from './jharkhandimage/hurbaloiljharkhand.jpeg';
import tribalTshirt from './jharkhandimage/jaijohar.jpeg';
import tribalTshirt1 from './jharkhandimage/tshirtjh.jpeg'

// import littiChokha from '../assets/what-we-offer-bihars/food/litti-chokha.jpg';
// import tribalPickle from '../assets/what-we-offer-bihars/food/tribal-pickle.jpg';

// import terracottaHorse from '../assets/what-we-offer-bihars/terracotta/terracotta-horse.jpg';
// import clayDiyas from '../assets/what-we-offer-bihars/terracotta/clay-diyas.jpg';
// import clayPots from '../assets/what-we-offer-bihars/terracotta/clay-pots.jpg';

// import tribalAmulet from '../assets/what-we-offer-bihars/spiritual/tribal-amulet.jpg';
// import sarnaSymbol from '../assets/what-we-offer-bihars/spiritual/sarna-symbol.jpg';
// import tribalInstrument from '../assets/what-we-offer-bihars/spiritual/tribal-instrument.jpg';

// import juteBag from '../assets/what-we-offer-bihars/eco/jute-bag.jpg';
// import naturalPouch from '../assets/what-we-offer-bihars/eco/natural-pouch.jpg';
// import recycledPaper from '../assets/what-we-offer-bihars/eco/recycled-paper.jpg';


// import tribalMug from '../assets/what-we-offer-bihars/lifestyle/tribal-mug.jpg';
// import tribalHat from '../assets/what-we-offer-bihars/lifestyle/tribal-hat.jpg';

// import tulsiPowder from '../assets/what-we-offer-bihars/herbal/tulsi-powder.jpg';
// import herbalSoap from '../assets/what-we-offer-bihars/herbal/herbal-soap.jpg';


// import basketSet from '../assets/what-we-offer-bihars/gift/basket-set.jpg';
// import tribalClock from '../assets/what-we-offer-bihars/gift/tribal-clock.jpg';
// import tribalFrame from '../assets/what-we-offer-bihars/gift/tribal-frame.jpg';


const JharkhandProducts = () => {
  // State for search and filter
  const [jharkhandSearchTerm, setJharkhandSearchTerm] = useState('');
  const [jharkhandSelectedCategory, setJharkhandSelectedCategory] = useState('all');
  const [jharkhandActiveTab, setJharkhandActiveTab] = useState('all');
  const [showStoryPopup, setShowStoryPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Categories data for Jharkhand
  const jharkhandCategories = [
  { id: 'all', name: 'All Products', icon: '📦' },
  { id: 'art', name: 'कला एवं पेंटिंग | Art & Painting', icon: '🎨' },
  { id: 'handloom', name: 'हैंडलूम एवं टेक्सटाइल | Handloom & Textile', icon: '🧵' },
  { id: 'forest', name: 'जंगल आधारित उत्पाद | Forest-Based Products', icon: '🌳' },
  { id: 'food', name: 'पारंपरिक खाद्य उत्पाद | Traditional Food Products', icon: '🍲' },
  { id: 'terracotta', name: 'टेराकोटा एवं प्राकृतिक उत्पाद | Terracotta & Natural Products', icon: '🏺' },
  { id: 'spiritual', name: 'आदिवासी आस्था एवं संस्कृति | Tribal Spiritual & Cultural', icon: '🕉️' },
  { id: 'eco', name: 'इको-फ्रेंडली हस्तशिल्प | Eco-Friendly Crafts', icon: '🌿' },
  { id: 'lifestyle', name: 'लाइफस्टाइल एवं मर्चेंडाइज | Lifestyle Merchandise', icon: '👕' },
  { id: 'herbal', name: 'हर्बल एवं आयुर्वेदिक उत्पाद | Herbal & Ayurvedic Products', icon: '🌿' },
  { id: 'gift', name: 'गिफ्ट एवं होम डेकोर | Gift & Home Decor', icon: '🎁' }
];

// Products data with stories
const jharkhandProducts = [
  // ==================== Art & Painting (3+ Products) ====================
  { 
    id: 1, 
    name: 'सोहराय हैंड पेंटेड कैनवास', 
    englishName: 'Sohrai Hand-Painted Canvas', 
    category: 'art', 
    price: '₹1,200 - ₹4,500', 
    description: 'Traditional Sohrai tribal painting on canvas depicting nature and animals.', 
    image: sohraiCanvas,
    story: `सोहराय कला झारखंड की प्राचीन आदिवासी कला है जो हजारों साल पुरानी है। यह कला विशेष रूप से सर्दियों के मौसम में सोहराय त्योहार के दौरान बनाई जाती है। महिलाएं अपने घरों की दीवारों पर प्राकृतिक रंगों से जानवरों, पक्षियों और प्रकृति के चित्र बनाती हैं। यह कला पीढ़ी-दर-पीढ़ी चली आ रही है और आज भी झारखंड के गाँवों में जीवित है।

Sohrai art is one of the oldest tribal art forms of Jharkhand, dating back thousands of years. This art is specially created during the Sohrai festival in winter season. Women paint animals, birds and nature motifs on their house walls using natural colors. This art has been passed down through generations and is still alive in Jharkhand villages.

**कला की विशेषताएं (Art Features):**
• प्राकृतिक रंगों का उपयोग (Use of natural colors)
• जानवरों और प्रकृति के चित्र (Depictions of animals and nature)
• ज्यामितीय पैटर्न (Geometric patterns)
• सांस्कृतिक महत्व (Cultural significance)

**कलाकार:** स्थानीय आदिवासी महिलाएं
**उपयोग:** घर की सजावट, संग्रहणीय कला
**प्रामाणिकता:** 100% हस्तनिर्मित`
  },
  { 
      id: 4, 
      name: 'सोहराय वॉल हैंगिंग', 
      englishName: 'Sohrai Wall Hanging', 
      category: 'art', 
      price: '₹600 - ₹2,500', 
      description: 'Handcrafted wall hangings with Sohrai art patterns.', 
      image: wallhangining,
      story: `सोहराय वॉल हैंगिंग पारंपरिक कला को आधुनिक घरों में लाने का एक तरीका है। ये हैंगिंग कपड़े या कैनवास पर हस्तनिर्मित होते हैं और सोहराय के पारंपरिक डिजाइन को दर्शाते हैं।

Sohrai wall hangings are a way to bring traditional art to modern homes. These hangings are handmade on cloth or canvas and showcase traditional Sohrai designs.` 
    },
  { 
    id: 2, 
    name: 'कोहबर वॉल फ्रेम', 
    englishName: 'Kohbar Wall Frame', 
    category: 'art', 
    price: '₹900 - ₹3,500', 
    description: 'Kohbar art wall frames showcasing traditional tribal marriage motifs.', 
    image: kohbarFrame,
    story: `कोहबर कला झारखंड की विवाह संबंधी कला है जो शादी के समय दुल्हन के कमरे में बनाई जाती है। यह कला प्रजनन क्षमता, समृद्धि और सुखी वैवाहिक जीवन का प्रतीक है। कोहबर में फूल, पत्ते, जानवर और ज्यामितीय आकृतियों का उपयोग किया जाता है। यह कला विशेष रूप से संथाल और मुंडा जनजातियों में प्रचलित है।

Kohbar art is the marriage-related art of Jharkhand painted in the bride's room during weddings. This art symbolizes fertility, prosperity and happy married life. Kohbar uses flowers, leaves, animals and geometric shapes. This art is especially popular among Santhal and Munda tribes.

**पारंपरिक महत्व:** विवाह समारोह का अभिन्न अंग
**प्रतीकात्मकता:** प्रेम, एकता और समृद्धि
**रंग:** लाल, सफेद और काले रंगों का प्रयोग
**उपयोग:** घर की सजावट, शादी का उपहार

**सांस्कृतिक कहानी:** मान्यता है कि कोहबर कला नवविवाहित जोड़े के लिए सौभाग्य और समृद्धि लाती है।`
  },
  { 
    id: 3, 
    name: 'आदिवासी मोटिफ आर्ट पेंटिंग', 
    englishName: 'Tribal Motif Art Painting', 
    category: 'art', 
    price: '₹800 - ₹3,000', 
    description: 'Traditional tribal motif paintings depicting cultural symbols.', 
    image: tribalMotif,
    story: `आदिवासी मोटिफ कला झारखंड के विभिन्न जनजातियों की सांस्कृतिक पहचान को दर्शाती है। हर मोटिफ का अपना अर्थ और महत्व है। ये चित्र प्रकृति, दैनिक जीवन और आध्यात्मिक विश्वासों से प्रेरित हैं। झारखंड की 32 से अधिक जनजातियों की अपनी अनूठी कलात्मक अभिव्यक्ति है जो इन चित्रों में देखी जा सकती है।

Tribal motif art represents the cultural identity of various tribes of Jharkhand. Each motif has its own meaning and significance. These paintings are inspired by nature, daily life and spiritual beliefs. Jharkhand's 32+ tribes have their unique artistic expressions visible in these paintings.

**प्रमुख मोटिफ:**
• पेड़-पौधे: प्रकृति के साथ सामंजस्य
• जानवर: स्थानीय वन्यजीव
• ज्यामितीय आकृतियाँ: गणितीय समझ
• दैनिक उपकरण: कृषि और शिकार के औजार

**सांस्कृतिक महत्व:** ये चित्र आदिवासी इतिहास और परंपराओं को संरक्षित करते हैं।`
  },

  // ==================== Handloom & Textile (3+ Products) ====================
  { 
    id: 4, 
    name: 'तसर सिल्क आदिवासी साड़ी', 
    englishName: 'Tussar Silk Tribal Saree', 
    category: 'handloom', 
    price: '₹2,500 - ₹9,000', 
    description: 'Pure Tussar silk saree with traditional tribal patterns.', 
    image: tussarSaree,
    story: `तसर सिल्क झारखंड की प्रसिद्ध रेशम की विविधता है जो जंगली रेशमकीटों से प्राप्त होती है। यह साड़ी पूरी तरह से हाथ से बुनी जाती है और आदिवासी पैटर्न से सजाई जाती है। तसर सिल्क प्राकृतिक, इको-फ्रेंडली और सांस लेने योग्य होती है। झारखंड के चाईबासा और खूंटी क्षेत्र में तसर बुनाई का प्राचीन इतिहास है।

Tussar silk is Jharkhand's famous variety of silk obtained from wild silkworms. This saree is completely handwoven and adorned with tribal patterns. Tussar silk is natural, eco-friendly and breathable. Chaibasa and Khunti regions of Jharkhand have ancient history of Tussar weaving.

**विशेषताएं:**
• 100% शुद्ध तसर रेशम
• हाथ से बुना हुआ
• प्राकृतिक रंग
• आदिवासी डिजाइन
• पारंपरिक बुनाई तकनीक

**बुनाई प्रक्रिया:** एक साड़ी बुनने में 7-10 दिन लगते हैं।
**कलाकार:** स्थानीय आदिवासी बुनकर परिवार`
  },
  { 
    id: 5, 
    name: 'झारखंड हैंडलूम दुपट्टा', 
    englishName: 'Jharkhand Handloom Dupatta', 
    category: 'handloom', 
    price: '₹400 - ₹1,800', 
    description: 'Handwoven dupatta with tribal designs and patterns.', 
    image: handloomDupatta,
    story: `झारखंड का हैंडलूम दुपट्टा स्थानीय कारीगरों द्वारा पारंपरिक तकनीक से बुना जाता है। इसमें प्राकृतिक रंगों और आदिवासी डिजाइनों का उपयोग किया जाता है। यह दुपट्टा न केवल फैशनेबल है बल्कि स्थानीय कारीगरों के कौशल को भी समर्थन देता है। हजारीबाग और रामगढ़ के बुनकर इस कला में विशेषज्ञ हैं।

Jharkhand handloom dupatta is woven by local artisans using traditional techniques. It uses natural colors and tribal designs. This dupatta is not only fashionable but also supports local artisans' skills. Hazaribagh and Ramgarh weavers are experts in this art.

**विशेषताएं:**
• कॉटन या तसर सिल्क
• हाथ से बुना हुआ
• ट्राइबल बॉर्डर डिजाइन
• प्राकृतिक डाई
• हल्का और आरामदायक

**उपयोग:** रोजमर्रा के पहनावे से लेकर विशेष अवसरों तक`
  },

  {
id: 20,
name: 'कर्मा पूजा थाली सेट',
englishName: 'Karma Pooja Thali Set',
category: 'ritual_special',
price: '₹600 - ₹3,500',
description: 'पारंपरिक कर्मा पूजा के लिए विशेष रूप से तैयार थाली सेट, जिसमें सभी आवश्यक सामग्री शामिल है।',
image: karmaPoojaThali,
story: `कर्मा पूजा थाली सेट झारखंड की प्राचीन आदिवासी आस्था और संस्कृति का पावन प्रतीक है। कर्मा पर्व झारखंड के मूलनिवासी समुदायों (जैसे उराँव, मुंडा, हो) का सबसे महत्वपूर्ण वार्षिक फसल एवं प्रकृति उत्सव है, जहाँ कर्मा देवता/देवी की पूजा कर समृद्धि और सामुदायिक एकता की कामना की जाती है।

यह थाली सेट उसी पवित्र परंपरा को घर-घर पहुँचाता है। इसमें स्थानीय कारीगरों द्वारा हाथ से बनाई गई सभी आवश्यक वस्तुएँ शामिल हैं:

काष्ठ/पीतल की थाली: साल या महुआ की लकड़ी से हाथ से तराशी गई, या पारंपरिक डिजाइन वाली पीतल की थाली।

प्राकृतिक प्रसाद पात्र: धान, महुआ फूल, सिंदूर, हल्दी, चावल रखने के लिए छोटे डिब्बे।

पवित्र कर्मा शाखा/करी: पूजा का मुख्य प्रतीक, जिसे थाली में स्थान दिया जाता है।

मिट्टी के दीये: देसी घी जलाने के लिए।

हाथ से बनी सूप/चलनी: पवित्र अनाज के लिए।

लाल-पीले कपड़े का टुकड़ा: पारंपरिक रंगों में।

महत्व:
यह सेट सिर्फ पूजा का सामान नहीं, बल्कि झारखंड की सांस्कृतिक धरोहर है। इसे खरीदकर आप स्थानीय कारीगरों को प्रोत्साहित करते हैं और एक पुरानी परंपरा को जीवित रखने में योगदान देते हैं। हर थाली में वह पवित्रता और श्रद्धा समाई है, जो पीढ़ियों से कर्मा नृत्य और गीतों के साथ गूँजती आई है।

विशेषताएँ / Features:
• हस्तनिर्मित एवं प्रामाणिक
• प्राकृतिक सामग्री (लकड़ी, मिट्टी, कपड़ा)
• पूर्ण पूजा सामग्री से सुसज्जित
• कलात्मक एवं टिकाऊ डिजाइन
• परंपरा के अनुरूप पैकिंग

उपयोग / Use:
• घर/गाँव में कर्मा पूजा समारोह के लिए
• सांस्कृतिक विरासत के संग्रह के रूप में
• विशेष उपहार (त्योहार, शादी, सम्मान)
• सामुदायिक आयोजन एवं सांस्कृतिक प्रदर्शन
`
},
  { 
    id: 6, 
    name: 'आदिवासी वर्क शॉल', 
    englishName: 'Tribal Work Shawl', 
    category: 'handloom', 
    price: '₹600 - ₹2,500', 
    description: 'Warm shawl with intricate tribal embroidery work.', 
    image: tribalShawl,
    story: `आदिवासी वर्क शॉल झारखंड की ठंडी पहाड़ियों के लिए परफेक्ट है। इन शॉल्स पर हाथ से कढ़ाई की जाती है जिसमें आदिवासी प्रतीक और डिजाइन होते हैं। यह कढ़ाई कारीगरों को कई दिन लगती है और हर शॉल एक अनूठा टुकड़ा होता है। यह न केवल गर्मी प्रदान करता है बल्कि सांस्कृतिक विरासत भी दर्शाता है।

Tribal work shawl is perfect for Jharkhand's cold hills. These shawls feature hand embroidery with tribal symbols and designs. This embroidery takes artisans several days and each shawl is a unique piece. It not only provides warmth but also showcases cultural heritage.

**विशेषताएं:**
• उनी या कपास आधार
• हाथ से कढ़ाई
• पारंपरिक डिजाइन
• गर्म और आरामदायक
• सर्दियों के लिए आदर्श`
  },

  // ==================== Forest-Based Products (3+ Products) ====================
  { 
    id: 7, 
    name: 'साल पत्ता प्लेट', 
    englishName: 'Sal Leaf Plate', 
    category: 'forest', 
    price: '₹50 - ₹200', 
    description: 'Eco-friendly plates made from Sal leaves, biodegradable.', 
    image: salLeafPlate,
    story: `साल के पत्तों से बनी प्लेटें झारखंड की पारंपरिक और पर्यावरण अनुकूल उत्पाद हैं। ये प्लेटें पूरी तरह से प्राकृतिक और बायोडिग्रेडेबल हैं। साल के पेड़ झारखंड के जंगलों में प्रचुर मात्रा में पाए जाते हैं और इनके पत्तों से बने उत्पाद स्थानीय अर्थव्यवस्था को बढ़ावा देते हैं। गुमला और सिमडेगा जिले के आदिवासी इन्हें बनाने में माहिर हैं।

Sal leaf plates are traditional and eco-friendly products of Jharkhand. These plates are completely natural and biodegradable. Sal trees are abundant in Jharkhand forests and products made from their leaves boost the local economy. Tribes of Gumla and Simdega districts are experts in making these.

**पर्यावरण लाभ:**
• 100% बायोडिग्रेडेबल
• प्लास्टिक मुक्त
• कम्पोस्ट होने योग्य
• प्राकृतिक और नॉन-टॉक्सिक

**उपयोग:** भोजन परोसने, पिकनिक, शादी समारोह
**बनाने की प्रक्रिया:** पत्तों को साफ करके, सुखाकर और सिलाई करके बनाया जाता है।`
  },
  { 
    id: 8, 
    name: 'बाँस की टोकरी', 
    englishName: 'Bamboo Basket', 
    category: 'forest', 
    price: '₹150 - ₹800', 
    description: 'Handwoven bamboo baskets for storage and decoration.', 
    image: bambooBasket,
    story: `बाँस की टोकरियाँ झारखंड के वन संसाधनों का उत्कृष्ट उदाहरण हैं। ये टोकरियाँ स्थानीय बाँस से हाथ से बुनी जाती हैं और विभिन्न आकार और डिजाइन में उपलब्ध हैं। बाँस का उपयोग झारखंड की आदिवासी संस्कृति का अभिन्न अंग है और यह टिकाऊ, मजबूत और पर्यावरण के अनुकूल है।

Bamboo baskets are excellent examples of Jharkhand's forest resources. These baskets are handwoven from local bamboo and available in various shapes and designs. Bamboo use is integral to Jharkhand's tribal culture and it is durable, strong and eco-friendly.

**विशेषताएं:**
• 100% प्राकृतिक बाँस
• हाथ से बुना हुआ
• हल्का और मजबूत
• विभिन्न आकार उपलब्ध
• जैव निम्नीकरणीय

**उपयोग:** सब्जियाँ रखने, कपड़े संग्रह, घर की सजावट
**कलाकार:** चक्रधरपुर और सरायकेला के बुनकर`
  },
  { 
    id: 9, 
    name: 'जंगली शहद', 
    englishName: 'Wild Forest Honey', 
    category: 'forest', 
    price: '₹300 - ₹1,200 per kg', 
    description: 'Pure honey collected from forest bees, natural and organic.', 
    image: forestHoney,
    story: `झारखंड के जंगलों से एकत्र किया गया जंगली शहद प्रकृति की शुद्धतम देन है। स्थानीय आदिवासी पारंपरिक तरीकों से शहद एकत्र करते हैं जिससे मधुमक्खियों को नुकसान नहीं पहुँचता। यह शहद बिना किसी प्रसंस्करण के होता है और इसमें प्राकृतिक पोषक तत्व बने रहते हैं। नेतरहाट और लातेहार के जंगलों का शहद विशेष रूप से प्रसिद्ध है।

Wild honey collected from Jharkhand forests is nature's purest gift. Local tribes collect honey using traditional methods that don't harm bees. This honey is unprocessed and retains natural nutrients. Honey from Netarhat and Latehar forests is especially famous.

**गुणवत्ता:**
• 100% ऑर्गेनिक
• कोई केमिकल नहीं
• प्राकृतिक मीठास
• औषधीय गुण
• पोषक तत्व से भरपूर

**स्वास्थ्य लाभ:** एंटीऑक्सीडेंट से भरपूर, प्रतिरक्षा बढ़ाता है, गले की खराश में आराम`
  },

  // ==================== Traditional Food Products (3+ Products) ====================
  { 
    id: 10, 
    name: 'महुआ फूल सूखा', 
    englishName: 'Mahua Flower Dry', 
    category: 'food', 
    price: '₹200 - ₹800 per kg', 
    description: 'Dried Mahua flowers, used in traditional tribal cuisine.', 
    image: mahuaFlower,
    story: `महुआ फूल झारखंड के आदिवासी समुदायों के लिए एक पवित्र वृक्ष है। महुआ के फूल पौष्टिक होते हैं और पारंपरिक व्यंजनों में उपयोग किए जाते हैं। इन फूलों को सुखाकर लंबे समय तक संग्रहीत किया जा सकता है। महुआ न केवल भोजन है बल्कि आदिवासी संस्कृति और अर्थव्यवस्था का महत्वपूर्ण हिस्सा है। वसंत ऋतु में एकत्र किए गए फूल विशेष रूप से मूल्यवान होते हैं।

Mahua tree is sacred for tribal communities of Jharkhand. Mahua flowers are nutritious and used in traditional dishes. These flowers can be dried and stored for long periods. Mahua is not just food but an important part of tribal culture and economy. Flowers collected in spring season are especially valuable.

**पोषण मूल्य:**
• प्रोटीन से भरपूर
• प्राकृतिक शर्करा
• विटामिन और खनिज
• ऊर्जा का अच्छा स्रोत

**उपयोग:** व्यंजन, मिठाइयाँ, पारंपरिक पेय
**संग्रहण:** सूखे स्थान पर 1 वर्ष तक रखा जा सकता है`
  },
//   { 
//     id: 11, 
//     name: 'लिट्टी चोखा मसाला किट', 
//     englishName: 'Litti Chokha Spice Kit', 
//     category: 'food', 
//     price: '₹150 - ₹500', 
//     description: 'Authentic spice mix for traditional Litti Chokha dish.', 
//     image: littiChokha,
//     story: `लिट्टी चोखा झारखंड का प्रसिद्ध पारंपरिक व्यंजन है। यह मसाला किट घर पर असली झारखंडी स्वाद बनाने में मदद करती है। किट में सभी आवश्यक मसाले और नुस्खा शामिल है। लिट्टी चोखा न केवल स्वादिष्ट है बल्कि पौष्टिक भी है और स्थानीय सामग्री से बनाया जाता है।

// Litti Chokha is Jharkhand's famous traditional dish. This spice kit helps create authentic Jharkhandi flavor at home. The kit includes all necessary spices and recipe. Litti Chokha is not only delicious but also nutritious and made from local ingredients.

// **किट में शामिल:**
// • सत्तू मिश्रण
// • विशेष मसाले
// • चोखा मसाला
// • तैयारी की विधि
// • परोसने के सुझाव

// **स्वास्थ्य लाभ:** उच्च प्रोटीन, फाइबर से भरपूर, आसानी से पचने योग्य
// **पारंपरिक महत्व:** त्योहारों और समारोहों का विशेष भोजन`
//   },
//   { 
//     id: 12, 
//     name: 'आदिवासी अचार मिश्रण', 
//     englishName: 'Tribal Pickle Mix', 
//     category: 'food', 
//     price: '₹100 - ₹400', 
//     description: 'Traditional tribal pickle made with forest ingredients.', 
//     image: tribalPickle,
//     story: `आदिवासी अचार झारखंड के जंगलों से मिलने वाली सामग्रियों से बनाया जाता है। इसमें जंगली आम, बेर, करोंदा और विभिन्न जड़ी-बूटियों का उपयोग होता है। यह अचार पारंपरिक तरीके से तैयार किया जाता है और महीनों तक चलता है। हर परिवार का अपना गुप्त नुस्खा होता है जो पीढ़ियों से चला आ रहा है।

// Tribal pickle is made from ingredients found in Jharkhand forests. It uses wild mango, ber, karonda and various herbs. This pickle is prepared traditionally and lasts for months. Every family has their secret recipe passed down through generations.

// **विशेषताएं:**
// • प्राकृतिक सामग्री
// • कोई प्रिजर्वेटिव नहीं
// • पारंपरिक तैयारी
// • अनूठा स्वाद
// • लंबी शेल्फ लाइफ

// **स्वास्थ्य लाभ:** पाचन में सहायक, भूख बढ़ाता है, प्रतिरक्षा बढ़ाता है`
//   },

  // ==================== Terracotta & Natural Products (3+ Products) ====================
//   { 
//     id: 13, 
//     name: 'टेराकोटा घोड़ा', 
//     englishName: 'Terracotta Horse', 
//     category: 'terracotta', 
//     price: '₹250 - ₹1,500', 
//     description: 'Traditional terracotta horse sculpture, cultural symbol.', 
//     image: terracottaHorse,
//     story: `टेराकोटा घोड़ा झारखंड की मिट्टी शिल्प कला का प्रतीक है। यह घोड़ा आदिवासी संस्कृति में शक्ति और सुंदरता का प्रतीक है। स्थानीय मिट्टी से बने ये शिल्प पारंपरिक तकनीक से तैयार किए जाते हैं और प्राकृतिक रूप से सुखाए जाते हैं। खूंटी और रांची के कारीगर इस कला में विशेषज्ञ हैं।

// Terracotta horse is symbol of Jharkhand's clay craft. This horse symbolizes strength and beauty in tribal culture. Made from local clay, these crafts are prepared using traditional techniques and dried naturally. Artisans of Khunti and Ranchi are experts in this art.

// **निर्माण प्रक्रिया:**
// • स्थानीय लाल मिट्टी
// • हाथ से आकार देना
// • प्राकृतिक सुखाना
// • कम तापमान पर पकाना
// • हाथ से रंगना

// **सांस्कृतिक महत्व:** घर में समृद्धि और सुख का प्रतीक
// **उपयोग:** घर की सजावट, उपहार, संग्रहण`
//   },
//   { 
//     id: 14, 
//     name: 'मिट्टी के दीये', 
//     englishName: 'Clay Diyas', 
//     category: 'terracotta', 
//     price: '₹50 - ₹300 per set', 
//     description: 'Handmade clay lamps for festivals and home decor.', 
//     image: clayDiyas,
//     story: `मिट्टी के दीये झारखंड की पारंपरिक दीपक हैं जो प्राकृतिक मिट्टी से बनाए जाते हैं। ये दीये हाथ से बनाए जाते हैं और प्राकृतिक रूप से सुखाए जाते हैं। दीवाली और अन्य त्योहारों पर इनका विशेष महत्व है। ये पर्यावरण के अनुकूल हैं और जलने के बाद मिट्टी में मिल जाते हैं।

// Clay diyas are Jharkhand's traditional lamps made from natural clay. These diyas are handmade and dried naturally. They have special significance during Diwali and other festivals. They are eco-friendly and merge back into soil after burning.

// **विशेषताएं:**
// • 100% प्राकृतिक मिट्टी
// • हाथ से बनाए गए
// • कोई रसायन नहीं
// • बायोडिग्रेडेबल
// • पारंपरिक डिजाइन

// **पर्यावरण लाभ:** प्लास्टिक दीयों के विपरीत, ये प्रदूषण नहीं करते
// **उपयोग:** त्योहार, पूजा, घर की सजावट`
//   },
//   { 
//     id: 15, 
//     name: 'प्राकृतिक मिट्टी के बर्तन', 
//     englishName: 'Natural Clay Pots', 
//     category: 'terracotta', 
//     price: '₹200 - ₹1,000', 
//     description: 'Traditional clay pots for cooking and water storage.', 
//     image: clayPots,
//     story: `प्राकृतिक मिट्टी के बर्तन झारखंड की पारंपरिक रसोई का हिस्सा हैं। ये बर्तन मिट्टी की प्राकृतिक गुणवत्ता के कारण भोजन के स्वाद और पोषक तत्वों को बनाए रखते हैं। पानी को ठंडा रखने के लिए मटके का उपयोग सदियों से होता आ रहा है। ये बर्तन स्थानीय कुम्हारों द्वारा पारंपरिक चाक पर बनाए जाते हैं।

// Natural clay pots are part of Jharkhand's traditional kitchen. These pots preserve food flavor and nutrients due to clay's natural qualities. Matka has been used for centuries to keep water cool. These pots are made by local potters on traditional wheels.

// **लाभ:**
// • भोजन का स्वाद बढ़ाते हैं
// • प्राकृतिक कूलिंग
// • कोई रसायन नहीं
// • पर्यावरण अनुकूल
// • स्थानीय रोजगार

// **उपयोग:** पानी भंडारण, खाना पकाना, दही जमाना`
//   },

  // ==================== Tribal Spiritual & Cultural (3+ Products) ====================
//   { 
//     id: 16, 
//     name: 'आदिवासी ताबीज', 
//     englishName: 'Tribal Amulet', 
//     category: 'spiritual', 
//     price: '₹150 - ₹600', 
//     description: 'Traditional tribal amulets for protection and blessings.', 
//     image: tribalAmulet,
//     story: `आदिवासी ताबीज झारखंड की आदिवासी आस्था और आध्यात्मिकता का प्रतीक है। ये ताबीज प्राकृतिक सामग्रियों जैसे लकड़ी, धातु, पत्थर और बीजों से बनाए जाते हैं। हर ताबीज का अपना विशेष महत्व और शक्ति होती है। ये सुरक्षा, सौभाग्य और स्वास्थ्य के लिए पहने जाते हैं।

// Tribal amulet symbolizes Jharkhand's tribal faith and spirituality. These amulets are made from natural materials like wood, metal, stones and seeds. Each amulet has its own special significance and power. They are worn for protection, luck and health.

// **प्रकार:**
// • सुरक्षा ताबीज
// • स्वास्थ्य ताबीज
// • सौभाग्य ताबीज
// • विवाह ताबीज

// **सामग्री:** प्राकृतिक लकड़ी, तांबा, पीतल, प्राकृतिक पत्थर
// **आध्यात्मिक महत्व:** ऋषि-मुनियों द्वारा प्राचीन समय से प्रयोग`
//   },
//   { 
//     id: 17, 
//     name: 'सरना धर्म प्रतीक', 
//     englishName: 'Sarna Religion Symbol', 
//     category: 'spiritual', 
//     price: '₹300 - ₹1,200', 
//     description: 'Sacred symbols of Sarna religion, tribal spirituality.', 
//     image: sarnaSymbol,
//     story: `सरना धर्म प्रतीक झारखंड के आदिवासियों के मूल धर्म का प्रतिनिधित्व करते हैं। सरना धर्म प्रकृति पूजा पर आधारित है जहाँ पेड़, पहाड़, नदी और जंगल पवित्र माने जाते हैं। ये प्रतीक साल वृक्ष, पहाड़ और प्राकृतिक तत्वों से प्रेरित हैं। ये न केवल धार्मिक महत्व रखते हैं बल्कि सांस्कृतिक पहचान भी दर्शाते हैं।

// Sarna religion symbols represent the indigenous religion of Jharkhand's tribes. Sarna religion is based on nature worship where trees, mountains, rivers and forests are considered sacred. These symbols are inspired by Sal tree, mountains and natural elements. They not only have religious significance but also represent cultural identity.

// **प्रमुख प्रतीक:**
// • साल वृक्ष: जीवन और शक्ति
// • पहाड़: स्थिरता और सुरक्षा
// • नदी: जीवन और शुद्धता
// • सूर्य: ऊर्जा और जीवन

// **धार्मिक महत्व:** प्रकृति के साथ सामंजस्य और सम्मान
// **उपयोग:** पूजा, घर की सजावट, सांस्कृतिक कार्यक्रम`
//   },
//   { 
//     id: 18, 
//     name: 'आदिवासी वाद्य यंत्र', 
//     englishName: 'Tribal Musical Instruments', 
//     category: 'spiritual', 
//     price: '₹500 - ₹3,000', 
//     description: 'Traditional tribal musical instruments for cultural ceremonies.', 
//     image: tribalInstrument,
//     story: `आदिवासी वाद्य यंत्र झारखंड की संगीत परंपरा का हिस्सा हैं। ये यंत्र प्राकृतिक सामग्रियों से बनाए जाते हैं और पारंपरिक समारोहों, नृत्य और संगीत में उपयोग किए जाते हैं। मांदर, नगाड़ा, बाँसुरी और ढोल विशेष रूप से प्रसिद्ध हैं। ये यंत्र न केवल संगीत बजाते हैं बल्कि सांस्कृतिक कहानियाँ भी सुनाते हैं।

// Tribal musical instruments are part of Jharkhand's music tradition. These instruments are made from natural materials and used in traditional ceremonies, dance and music. Mandar, Nagada, Bansuri and Dhol are especially famous. These instruments not only play music but also tell cultural stories.

// **प्रमुख यंत्र:**
// • मांदर: ढोलक जैसा यंत्र
// • बाँसुरी: बाँस की बनी
// • नगाड़ा: बड़ा ढोल
// • झांझ: धातु के

// **सांस्कृतिक महत्व:** त्योहारों, शादियों और सामुदायिक कार्यक्रमों का अभिन्न अंग
// **कलाकार:** विशेषज्ञ वादक परिवार`
//   },

  // ==================== Eco-Friendly Crafts (3+ Products) ====================
//   { 
//     id: 19, 
//     name: 'जूट का बैग', 
//     englishName: 'Jute Bag', 
//     category: 'eco', 
//     price: '₹100 - ₹500', 
//     description: 'Handmade jute bags, eco-friendly alternative to plastic.', 
//     image: juteBag,
//     story: `जूट का बैग झारखंड का पर्यावरण अनुकूल उत्पाद है जो प्लास्टिक के विकल्प के रूप में काम करता है। जूट प्राकृतिक रेशा है जो स्थानीय रूप से उगाया जाता है। ये बैग हाथ से बुने जाते हैं और टिकाऊ होते हैं। प्लास्टिक प्रदूषण को कम करने में ये बैग महत्वपूर्ण भूमिका निभा सकते हैं।

// Jute bag is Jharkhand's eco-friendly product that serves as alternative to plastic. Jute is natural fiber grown locally. These bags are handwoven and durable. They can play important role in reducing plastic pollution.

// **पर्यावरण लाभ:**
// • 100% बायोडिग्रेडेबल
// • पुन: प्रयोज्य
// • प्लास्टिक मुक्त
// • कार्बन फुटप्रिंट कम

// **उपयोग:** शॉपिंग बैग, किताबें रखने, दैनिक उपयोग
// **सामाजिक प्रभाव:** स्थानीय किसानों और बुनकरों को समर्थन`
//   },
//   { 
//     id: 19, 
//     name: 'प्राकृतिक रंगों की कपड़े की थैली', 
//     englishName: 'Natural Dye Cloth Pouch', 
//     category: 'eco', 
//     price: '₹80 - ₹300', 
//     description: 'Cloth pouches colored with natural dyes from plants.', 
//     image: naturalPouch,
//     story: `प्राकृतिक रंगों की कपड़े की थैली पूरी तरह से प्राकृतिक सामग्रियों से बनी है। रंग पौधों, फूलों, पत्तियों और जड़ों से प्राप्त किए जाते हैं। ये थैलियाँ केमिकल मुक्त हैं और पर्यावरण को नुकसान नहीं पहुँचातीं। हर थैली का रंग थोड़ा अलग होता है क्योंकि यह प्राकृतिक प्रक्रिया है।

// Natural dye cloth pouch is made completely from natural materials. Colors are obtained from plants, flowers, leaves and roots. These pouches are chemical-free and don't harm environment. Each pouch's color is slightly different as it's natural process.

// **प्राकृतिक रंग स्रोत:**
// • हल्दी: पीला रंग
// • इंडिगो: नीला रंग
// • मैंडर: लाल रंग
// • हिना: हरा रंग

// **लाभ:** त्वचा के अनुकूल, पर्यावरण सुरक्षित, अद्वितीय डिजाइन
// **उपयोग:** ज्वैलरी रखने, छोटे सामान, उपहार पैकेजिंग`
//   },
//   { 
//     id: 20, 
//     name: 'पुनर्नवीनीकरण कागज उत्पाद', 
//     englishName: 'Recycled Paper Products', 
//     category: 'eco', 
//     price: '₹50 - ₹400', 
//     description: 'Eco-friendly products made from recycled paper and waste.', 
//     image: recycledPaper,
//     story: `पुनर्नवीनीकरण कागज उत्पाद कचरे को कला में बदलने का उदाहरण हैं। ये उत्पाद अपशिष्ट कागज, गत्ता और प्राकृतिक फाइबर से बनाए जाते हैं। यह प्रक्रिया कचरे को कम करती है और संसाधनों का संरक्षण करती है। झारखंड के कई स्वयंसेवी संगठन महिलाओं को यह कला सिखाकर उन्हें आर्थिक रूप से सशक्त बना रहे हैं।

// Recycled paper products are examples of transforming waste into art. These products are made from waste paper, cardboard and natural fibers. This process reduces waste and conserves resources. Several Jharkhand NGOs are economically empowering women by teaching them this art.

// **उत्पाद श्रृंखला:**
// • नोटबुक और डायरी
// • ग्रीटिंग कार्ड
// • पेन स्टैंड
// • फोटो फ्रेम

// **पर्यावरण लाभ:** कचरा कम करना, पेड़ बचाना, ऊर्जा संरक्षण
// **सामाजिक प्रभाव:** महिला सशक्तिकरण, कौशल विकास`
//   },

  // ==================== Lifestyle Merchandise (3+ Products) ====================
  { 
    id: 21, 
    name: 'ट्राइबल प्रिंट टी-शर्ट', 
    englishName: 'Tribal Print T-Shirt', 
    category: 'lifestyle', 
    price: '₹250 - ₹900', 
    description: 'Casual t-shirts with traditional tribal prints and motifs.', 
    image: tribalTshirt,
    story: `ट्राइबल प्रिंट टी-शर्ट आधुनिक फैशन में पारंपरिक कला को शामिल करता है। ये टी-शर्ट झारखंड के आदिवासी डिजाइनों को प्रदर्शित करते हैं और स्थानीय कलाकारों के काम को समर्थन देते हैं। प्रिंट सोहराय, कोहबर और अन्य पारंपरिक कलाओं से प्रेरित हैं। यह सांस्कृतिक विरासत को युवा पीढ़ी तक पहुँचाने का तरीका है।

Tribal print T-shirt incorporates traditional art into modern fashion. These T-shirts showcase Jharkhand's tribal designs and support local artists' work. Prints are inspired by Sohrai, Kohbar and other traditional arts. This is way to bring cultural heritage to younger generation.

**विशेषताएं:**
• 100% कॉटन
• प्राकृतिक रंग
• हाथ से ब्लॉक प्रिंट
• आरामदायक फिट
• टिकाऊ कपड़ा

**डिजाइन:** सीमित संस्करण, प्रत्येक टुकड़ा अद्वितीय
**उपयोग:** कैजुअल वियर, यात्रा, सांस्कृतिक कार्यक्रम`
  },
  { 
    id: 27, 
    name: 'ट्राइबल प्रिंट टी-शर्ट', 
    englishName: 'Tribal Print T-Shirt', 
    category: 'lifestyle', 
    price: '₹250 - ₹900', 
    description: 'Casual t-shirts with traditional tribal prints and motifs.', 
    image: tribalTshirt1,
    story: `ट्राइबल प्रिंट टी-शर्ट आधुनिक फैशन में पारंपरिक कला को शामिल करता है। ये टी-शर्ट झारखंड के आदिवासी डिजाइनों को प्रदर्शित करते हैं और स्थानीय कलाकारों के काम को समर्थन देते हैं। प्रिंट सोहराय, कोहबर और अन्य पारंपरिक कलाओं से प्रेरित हैं। यह सांस्कृतिक विरासत को युवा पीढ़ी तक पहुँचाने का तरीका है।

Tribal print T-shirt incorporates traditional art into modern fashion. These T-shirts showcase Jharkhand's tribal designs and support local artists' work. Prints are inspired by Sohrai, Kohbar and other traditional arts. This is way to bring cultural heritage to younger generation.

**विशेषताएं:**
• 100% कॉटन
• प्राकृतिक रंग
• हाथ से ब्लॉक प्रिंट
• आरामदायक फिट
• टिकाऊ कपड़ा

**डिजाइन:** सीमित संस्करण, प्रत्येक टुकड़ा अद्वितीय
**उपयोग:** कैजुअल वियर, यात्रा, सांस्कृतिक कार्यक्रम`
  },
//   { 
//     id: 22, 
//     name: 'आदिवासी डिजाइन मग', 
//     englishName: 'Tribal Design Mug', 
//     category: 'lifestyle', 
//     price: '₹150 - ₹500', 
//     description: 'Ceramic mugs with traditional tribal artwork.', 
//     image: tribalMug,
//     story: `आदिवासी डिजाइन मग दैनिक उपयोग की वस्तु को कला का टुकड़ा बनाते हैं। ये मग सिरेमिक से बने हैं और हाथ से पेंट किए गए आदिवासी डिजाइनों से सजाए गए हैं। हर मग पर अलग डिजाइन है जो झारखंड की विविध कलात्मक परंपराओं को दर्शाता है। यह कला को रोजमर्रा की जिंदगी में लाने का उत्कृष्ट तरीका है।

// Tribal design mugs turn everyday utility item into piece of art. These mugs are made from ceramic and decorated with hand-painted tribal designs. Each mug has different design representing Jharkhand's diverse artistic traditions. This is excellent way to bring art into daily life.

// **विशेषताएं:**
// • फूड-ग्रेड सिरेमिक
// • हाथ से पेंट किया गया
// • डिशवॉशर सेफ
// • माइक्रोवेव सेफ
// • आकर्षक डिजाइन

// **उपयोग:** घर, ऑफिस, उपहार, संग्रह
// **डिजाइन:** सोहराय, कोहबर, आदिवासी ज्यामितीय पैटर्न`
//   },
//   { 
//     id: 23, 
//     name: 'जनजातीय हैट/टोपी', 
//     englishName: 'Tribal Hat/Cap', 
//     category: 'lifestyle', 
//     price: '₹200 - ₹700', 
//     description: 'Traditional tribal hats with cultural designs.', 
//     image: tribalHat,
//     story: `जनजातीय टोपी झारखंड के आदिवासियों की पारंपरिक पोशाक का हिस्सा है। ये टोपियाँ प्राकृतिक सामग्रियों जैसे बाँस, घास और कपड़े से बनाई जाती हैं। डिजाइन विशिष्ट जनजातीय पहचान दर्शाते हैं। यह न केवल फैशन एक्सेसरी है बल्कि सांस्कृतिक गौरव का प्रतीक भी है।

// Tribal hat is part of Jharkhand tribals' traditional attire. These hats are made from natural materials like bamboo, grass and cloth. Designs represent specific tribal identity. This is not just fashion accessory but also symbol of cultural pride.

// **प्रकार:**
// • धूप से बचाव के लिए टोपी
// • समारोहों के लिए विशेष टोपी
// • दैनिक उपयोग की टोपी
// • नृत्य प्रदर्शन टोपी

// **सामग्री:** प्राकृतिक फाइबर, हाथ से बुना हुआ
// **सांस्कृतिक महत्व:** जनजातीय पहचान और परंपरा`
//   },

  // ==================== Herbal & Ayurvedic Products (3+ Products) ====================
//   { 
//     id: 24, 
//     name: 'जंगली तुलसी पाउडर', 
//     englishName: 'Wild Tulsi Powder', 
//     category: 'herbal', 
//     price: '₹150 - ₹600 per 100g', 
//     description: 'Powder of wild Tulsi leaves, medicinal properties.', 
//     image: tulsiPowder,
//     story: `जंगली तुलसी पाउडर झारखंड के जंगलों में उगने वाली तुलसी से बनाया जाता है। यह तुलसी की विशेष प्रजाति है जिसमें औषधीय गुण अधिक होते हैं। स्थानीय आदिवासी सदियों से इसका उपयोग पारंपरिक चिकित्सा में करते आ रहे हैं। यह पाउडर प्राकृतिक रूप से सुखाए गए पत्तों से तैयार किया जाता है।

// Wild Tulsi powder is made from Tulsi that grows in Jharkhand forests. This is special variety of Tulsi with higher medicinal properties. Local tribes have been using it in traditional medicine for centuries. This powder is prepared from naturally dried leaves.

// **औषधीय गुण:**
// • प्रतिरक्षा बढ़ाने वाला
// • सर्दी-खांसी में राहत
// • तनाव कम करने वाला
// • एंटीऑक्सीडेंट से भरपूर

// **उपयोग:** चाय, काढ़ा, स्वास्थ्य पूरक
// **सेवन विधि:** 1 चम्मच गर्म पानी या चाय में मिलाकर`
//   },
//   { 
//     id: 25, 
//     name: 'आदिवासी हर्बल साबुन', 
//     englishName: 'Tribal Herbal Soap', 
//     category: 'herbal', 
//     price: '₹80 - ₹250 per piece', 
//     description: 'Natural soap made with tribal herbal recipes.', 
//     image: herbalSoap,
//     story: `आदिवासी हर्बल साबुन पारंपरिक आदिवासी नुस्खों के अनुसार बनाया जाता है। इसमें नीम, तुलसी, एलोवेरा और अन्य जड़ी-बूटियों का उपयोग किया जाता है। यह साबुन प्राकृतिक तेलों से बना है और केमिकल मुक्त है। झारखंड के आदिवासी समुदायों के पास त्वचा और बालों के लिए प्राचीन हर्बल ज्ञान है।

// Tribal herbal soap is made according to traditional tribal recipes. It uses neem, tulsi, aloe vera and other herbs. This soap is made from natural oils and chemical-free. Jharkhand's tribal communities have ancient herbal knowledge for skin and hair.

// **सामग्री:**
// • नीम: त्वचा के लिए अच्छा
// • तुलसी: एंटीसेप्टिक
// • एलोवेरा: मॉइस्चराइजिंग
// • प्राकृतिक तेल

// **लाभ:** त्वचा के अनुकूल, पर्यावरण सुरक्षित, प्राकृतिक सुगंध
// **उपयोग:** दैनिक स्नान, विशेष त्वचा देखभाल`
//   },
  { 
    id: 26, 
    name: 'प्राकृतिक तेल मिश्रण', 
    englishName: 'Natural Oil Blend', 
    category: 'herbal', 
    price: '₹200 - ₹800 per 100ml', 
    description: 'Traditional oil blends for hair and skin care.', 
    image: naturalOil,
    story: `प्राकृतिक तेल मिश्रण झारखंड की आदिवासी हर्बल परंपरा का हिस्सा है। यह मिश्रण नारियल, तिल, सरसों और विभिन्न जड़ी-बूटियों के तेल से बनाया जाता है। हर परिवार का अपना गुप्त मिश्रण होता है जो पीढ़ियों से चला आ रहा है। यह तेल बालों और त्वचा के लिए चमत्कारिक प्रभाव रखता है।

Natural oil blend is part of Jharkhand's tribal herbal tradition. This blend is made from coconut, sesame, mustard and various herb oils. Every family has their secret blend passed down through generations. This oil has miraculous effects for hair and skin.

**घटक:**
• नारियल तेल: बालों के लिए
• तिल का तेल: त्वचा के लिए
• जड़ी-बूटी अर्क: औषधीय गुण
• प्राकृतिक सुगंध

**लाभ:** बालों का झड़ना कम करना, त्वचा को पोषण देना, प्राकृतिक चमक
**उपयोग:** मालिश, दैनिक देखभाल, उपचार`
  },

  // ==================== Gift & Home Decor (3+ Products) ====================
//   { 
//     id: 27, 
//     name: 'सजावटी टोकरी सेट', 
//     englishName: 'Decorative Basket Set', 
//     category: 'gift', 
//     price: '₹300 - ₹1,500', 
//     description: 'Set of decorative baskets for home organization.', 
//     image: basketSet,
//     story: `सजावटी टोकरी सेट झारखंड के हस्तशिल्प का सुंदर उदाहरण है। ये टोकरियाँ बाँस और प्राकृतिक फाइबर से हाथ से बुनी जाती हैं। सेट में विभिन्न आकार की टोकरियाँ होती हैं जो घर को व्यवस्थित रखने में मदद करती हैं। यह न केवल उपयोगी है बल्कि सौंदर्यपूर्ण भी है।

// Decorative basket set is beautiful example of Jharkhand handicraft. These baskets are handwoven from bamboo and natural fibers. Set includes baskets of different sizes that help keep home organized. This is not only useful but also aesthetic.

// **सेट में शामिल:**
// • बड़ी टोकरी: कपड़े रखने के लिए
// • मध्यम टोकरी: किताबें रखने के लिए
// • छोटी टोकरी: ज्वैलरी रखने के लिए
// • गोल टोकरी: फल रखने के लिए

// **उपयोग:** घर की सजावट, व्यवस्था, उपहार
// **गुणवत्ता:** हाथ से बुना हुआ, टिकाऊ, प्राकृतिक`
//   },
//   { 
//     id: 28, 
//     name: 'ट्राइबल आर्ट वॉल क्लॉक', 
//     englishName: 'Tribal Art Wall Clock', 
//     category: 'gift', 
//     price: '₹500 - ₹2,000', 
//     description: 'Wall clock featuring traditional tribal artwork.', 
//     image: tribalClock,
//     story: `ट्राइबल आर्ट वॉल क्लॉक समय को कला के साथ जोड़ता है। यह घड़ी पारंपरिक आदिवासी डिजाइनों से सजी है और आधुनिक क्वार्ट्ज मैकेनिज्म से चलती है। हर घड़ी हाथ से पेंट की जाती है और एक अनूठा टुकड़ा होती है। यह घर या ऑफिस के लिए उत्कृष्ट उपहार है।

// Tribal art wall clock combines time with art. This clock is decorated with traditional tribal designs and runs on modern quartz mechanism. Each clock is hand-painted and unique piece. This is excellent gift for home or office.

// **विशेषताएं:**
// • लकड़ी या धातु का फ्रेम
// • हाथ से पेंट किया गया
// • साइलेंट मैकेनिज्म
// • सटीक समय
// • आकर्षक डिजाइन

// **डिजाइन:** सोहराय, कोहबर, जनजातीय प्रतीक
// **उपयोग:** लिविंग रूम, बेडरूम, ऑफिस, रिसेप्शन`
//   },
//   { 
//     id: 29, 
//     name: 'आदिवासी थीम फोटो फ्रेम', 
//     englishName: 'Tribal Theme Photo Frame', 
//     category: 'gift', 
//     price: '₹200 - ₹800', 
//     description: 'Photo frames decorated with tribal motifs and designs.', 
//     image: tribalFrame,
//     story: `आदिवासी थीम फोटो फ्रेम यादों को सजाने का अनूठा तरीका है। ये फ्रेम लकड़ी या बाँस से बने हैं और आदिवासी कला से सजाए गए हैं। हर फ्रेम हाथ से बनाया जाता है और इसकी अपनी विशेषता है। यह न केवल फोटो रखने के लिए है बल्कि कला का टुकड़ा भी है।

// Tribal theme photo frame is unique way to decorate memories. These frames are made from wood or bamboo and decorated with tribal art. Each frame is handmade and has its own uniqueness. This is not just for holding photos but also piece of art.

// **आकार:**
// • 4x6 इंच: सिंगल फोटो
// • 8x10 इंच: फैमिली फोटो
// • 5x7 इंच: कोलाज फ्रेम
// • हार्ट शेप: विशेष फ्रेम

// **सामग्री:** प्राकृतिक लकड़ी, हाथ से पेंट किया गया
// **उपयोग:** व्यक्तिगत उपहार, शादी का उपहार, घर की सजावट**पौष्टिकता:** विटामिन और मिनरल्स से भरपूर
// **पारंपरिक उपयोग:** व्यंजन, मदिरा, औषधि
// **सांस्कृतिक महत्व:** आदिवासी त्योहारों और अनुष्ठानों में महत्वपूर्ण` 
//     },
    
    // Add more products with stories as needed...
  ];
  
  // T-Shirt Quotes data
  const tshirtQuotes = [
    { category: 'Jharkhandi / Desi Hindi', quotes: [
      'झारखंडिया बानी, जान से',
      'जंगल मां जी से जुड़ल',
      'अपना जंगल, अपना पहचान',
      'माटी में जम बा',
      'सीधा दिल, मजबूत इरादा'
    ]},
    { category: 'Santhali Style Quotes', quotes: [
      'हापरामको झारखंड',
      'होर होपोन',
      'जंगल हमर पहचान',
      'दिसोम से प्यार',
      'आदिवासी बानी'
    ]},
    { category: 'Jharkhand Pride / Identity', quotes: [
      'अपना झारखंड, अपनी जान',
      'झारखंड से हैं, दिल से हैं',
      'जंगल की माटी, मजबूत पहचान',
      'जहाँ जंगल, वहीं जीवन',
      'झारखंडी हाँ, गर्व से'
    ]},
    { category: 'Short Bold Street-Style', quotes: [
      'जोहार',
      'आदिवासी',
      'जंगल',
      'दिसोम',
      'झारखंड'
    ]},
    { category: 'Festival & Culture', quotes: [
      'सरहुल के जय',
      'जंगल देवता के प्रणाम',
      'करम परब के मान',
      'करम देवता के जय',
      'माटी, पेड़ और परंपरा'
    ]},
    { category: 'Village Roots / Jungle Life', quotes: [
      'जंगल की हवा, सुकून भरा जीवन',
      'माटी की खुशबू, दिल में बसी',
      'पहाड़, पेड़ और अपनापन',
      'जंगल में जड़, जीवन में जम'
    ]},
    { category: 'Kurukh / Oraon Touch', quotes: [
      'हम ओरांव छी',
      'कुरुख हमर भाषा',
      'माटी हमर मान',
      'जंगल से जुड़ल छी',
      'कुरुख हमारी पहचान'
    ]},
    { category: 'Funny / Youth Desi Style', quotes: [
      'सादा जीवन, झारखंडी SWAG',
      'स्टाइल देसी, सोच जंगल वाली',
      'शहर देखा, जंगल नहीं भूला',
      'कम बोल, माटी बोल',
      'सुकून चाहिए? जंगल आ जाओ'
    ]},
    { category: 'Spiritual / Sanskriti Touch', quotes: [
      'प्रकृति ही धर्म है',
      'माटी ही माता है',
      'जंगल हमारा मंदिर',
      'संस्कार हमारी धरोहर'
    ]}
  ];
  
  // Filter products based on search and category
  const jharkhandFilteredProducts = jharkhandProducts.filter(product => {
    const matchesSearch = jharkhandSearchTerm === '' || 
      product.name.toLowerCase().includes(jharkhandSearchTerm.toLowerCase()) ||
      product.englishName.toLowerCase().includes(jharkhandSearchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(jharkhandSearchTerm.toLowerCase());
    
    const matchesCategory = jharkhandSelectedCategory === 'all' || product.category === jharkhandSelectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Handle category change
  const handleJharkhandCategoryChange = (categoryId) => {
    setJharkhandSelectedCategory(categoryId);
    setJharkhandActiveTab(categoryId);
  };
  
  // Handle search
  const handleJharkhandSearch = (e) => {
    setJharkhandSearchTerm(e.target.value);
  };
  
  // Clear filters
  const clearJharkhandFilters = () => {
    setJharkhandSearchTerm('');
    setJharkhandSelectedCategory('all');
    setJharkhandActiveTab('all');
  };

  // Handle view story
  const handleViewStory = (product) => {
    setSelectedProduct(product);
    setShowStoryPopup(true);
  };

  // Close story popup
  const closeStoryPopup = () => {
    setShowStoryPopup(false);
    setSelectedProduct(null);
  };

  // Main products page
  return (
    <div className="jharkhand-products-container">
      {/* Story Popup */}
      {showStoryPopup && selectedProduct && (
        <div className="jharkhand-story-popup-overlay">
          <div className="jharkhand-story-popup">
            <div className="jharkhand-story-popup-header">
              <h3>
                <i className="fas fa-book"></i> {selectedProduct.name}
              </h3>
             <button className="jharkhand-close-popup" onClick={closeStoryPopup}>
  ✕
</button>

            </div>
            
            <div className="jharkhand-story-popup-content">
              <div className="jharkhand-story-left">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <div className="jharkhand-story-image-info">
                  {/* <h4>{selectedProduct.englishName}</h4>
                  <p className="jharkhand-story-price">{selectedProduct.price}</p> */}
                  <div className="jharkhand-story-category">
                    <span className="jharkhand-story-category-icon">
                      {jharkhandCategories.find(cat => cat.id === selectedProduct.category)?.icon}
                    </span>
                    <span className="jharkhand-story-category-name">
                      {jharkhandCategories.find(cat => cat.id === selectedProduct.category)?.name.split('|')[0].trim()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="jharkhand-story-right">
                <div className="jharkhand-story-details">
                  <h4 className="jharkhand-story-title">कहानी और परंपरा | Story & Tradition</h4>
                  <div className="jharkhand-story-text">
                    {selectedProduct.story.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="jharkhand-story-paragraph">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="jharkhand-story-highlights">
                    <h5>
                      <i className="fas fa-star"></i> मुख्य विशेषताएं | Key Features
                    </h5>
                    <ul className="jharkhand-story-list">
                      <li>100% हस्तनिर्मित | 100% Handmade</li>
                      <li>प्राकृतिक सामग्री | Natural Materials</li>
                      <li>पारंपरिक तकनीक | Traditional Techniques</li>
                      <li>स्थानीय कारीगर | Local Artisans</li>
                      <li>पर्यावरण अनुकूल | Eco-Friendly</li>
                    </ul>
                  </div>
                  <div
  className="bihar-story-footer"
  style={{ position: "relative", zIndex: 999 }}
>
  

  <a
    href={`https://wa.me/9288404060?text=${encodeURIComponent(
      `Hello,
I am interested in this product.

Product Name: ${selectedProduct.name}

Please share the price, availability, and delivery details.

Thank you.`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      padding: "12px 26px",
      backgroundColor: "#df2424",
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: "600",
      borderRadius: "30px",
      textDecoration: "none",
      marginBottom:"10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
      fontFamily: "inherit",
    }}
  >
    Buy Now  </a>
</div>
                  
                  <div className="jharkhand-story-footer">
                    <p className="jharkhand-story-note">
                      <i className="fas fa-info-circle"></i> यह उत्पाद झारखंड के स्थानीय कारीगरों द्वारा पारंपरिक तरीकों से बनाया गया है।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Section with Background Image */}
      <header className="jharkhand-main-header">
        <div className="jharkhand-header-overlay"></div>
        <div className="jharkhand-header-content">
          <h1 className="jharkhand-title">JHARKHAND</h1>
          <p className="jharkhand-subtitle">Tribal Culture & Forest Products</p>
          <div className="jharkhand-header-line"></div>
        </div>
      </header>
      
      <div className="jharkhand-container">
        {/* Search and Filter Section */}
        <div className="jharkhand-filters-section">
          <div className="jharkhand-filter-group">
            <div className="jharkhand-search-box">
              <i className="fas fa-search"></i>
              <input 
                type="text" 
                placeholder="Search Jharkhand products..." 
                value={jharkhandSearchTerm}
                onChange={handleJharkhandSearch}
              />
            </div>
            
            <div className="jharkhand-category-select">
              <i className="fas fa-filter"></i>
              <select 
                value={jharkhandSelectedCategory} 
                onChange={(e) => handleJharkhandCategoryChange(e.target.value)}
              >
                {jharkhandCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <button className="jharkhand-clear-btn" onClick={clearJharkhandFilters}>
              <i className="fas fa-times"></i> Clear Filters
            </button>
          </div>
          
          <div className="jharkhand-results-info">
            <span className="jharkhand-product-count">{jharkhandFilteredProducts.length}</span> Products
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="jharkhand-category-tabs">
          {jharkhandCategories.map(category => (
            <button 
              key={category.id}
              className={`jharkhand-tab-btn ${jharkhandActiveTab === category.id ? 'jharkhand-active' : ''}`}
              onClick={() => handleJharkhandCategoryChange(category.id)}
            >
              <span className="jharkhand-tab-icon">{category.icon}</span>
              <span className="jharkhand-tab-name">{category.name.split('|')[0].trim()}</span>
            </button>
          ))}
        </div>
        
        
        {/* Products Grid */}
        {jharkhandFilteredProducts.length > 0 ? (
          <div className="jharkhand-products-grid">
            {jharkhandFilteredProducts.map(product => (
              <div className="jharkhand-product-card" key={product.id}>
                <div className="jharkhand-product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="jharkhand-product-category">
                    {jharkhandCategories.find(cat => cat.id === product.category)?.icon}
                    {jharkhandCategories.find(cat => cat.id === product.category)?.name.split('|')[0].trim()}
                  </div>
                </div>
                
                <div className="jharkhand-product-content">
                  <h3 className="jharkhand-product-name">{product.name}</h3>
                  <p className="jharkhand-product-english">{product.englishName}</p>
                  
                  <p className="jharkhand-product-description">{product.description}</p>
                  
                  {/* <div className="jharkhand-product-price">{product.price}</div> */}
                  
                  <div className="jharkhand-product-actions">
                    <button 
                      className="jharkhand-view-btn"
                      onClick={() => handleViewStory(product)}
                    >
                      <i className="fas fa-book"></i> View Product Story
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="jharkhand-no-results">
            <i className="fas fa-search"></i>
            <h3>No Products Found</h3>
            <p>Try a different search term or category</p>
            <button className="jharkhand-clear-btn" onClick={clearJharkhandFilters}>
              Clear All Filters
            </button>
          </div>
        )}
        
        {/* T-Shirt Quotes Section */}
        <div className="jharkhand-quotes-section">
          <h2 className="jharkhand-quotes-title">Traditional T-Shirt Quotes</h2>
          <div className="jharkhand-quotes-grid">
            {tshirtQuotes.map((quoteCategory, index) => (
              <div className="jharkhand-quote-category" key={index}>
                <h3 className="jharkhand-quote-category-title">{quoteCategory.category}</h3>
                <ul className="jharkhand-quote-list">
                  {quoteCategory.quotes.map((quote, idx) => (
                    <li className="jharkhand-quote-item" key={idx}>{quote}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="jharkhand-footer">
          <p>Explore the rich tribal heritage and forest products of Jharkhand.</p>
          <p className="jharkhand-copyright">© {new Date().getFullYear()} Jharkhand Tribal Products. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default JharkhandProducts;


// import React, { useState } from 'react';
// import './Whatweofferjharkhand.css';

// const JharkhandProducts = () => {
//   // State for search and filter
//   const [jharkhandSearchTerm, setJharkhandSearchTerm] = useState('');
//   const [jharkhandSelectedCategory, setJharkhandSelectedCategory] = useState('all');
//   const [jharkhandActiveTab, setJharkhandActiveTab] = useState('all');
//   const [showStoryPopup, setShowStoryPopup] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
  
//   // Categories data for Jharkhand
//   const jharkhandCategories = [
//     { id: 'all', name: 'All Products', icon: '📦' },
//     { id: 'art', name: 'कला एवं पेंटिंग | Art & Painting', icon: '🎨' },
//     { id: 'handloom', name: 'हैंडलूम एवं टेक्सटाइल | Handloom & Textile', icon: '🧵' },
//     { id: 'forest', name: 'जंगल आधारित उत्पाद | Forest-Based Products', icon: '🌳' },
//     { id: 'food', name: 'पारंपरिक खाद्य उत्पाद | Traditional Food Products', icon: '🍲' },
//     { id: 'terracotta', name: 'टेराकोटा एवं प्राकृतिक उत्पाद | Terracotta & Natural Products', icon: '🏺' },
//     { id: 'spiritual', name: 'आदिवासी आस्था एवं संस्कृति | Tribal Spiritual & Cultural', icon: '🕉️' },
//     { id: 'eco', name: 'इको-फ्रेंडली हस्तशिल्प | Eco-Friendly Crafts', icon: '🌿' },
//     { id: 'lifestyle', name: 'लाइफस्टाइल एवं मर्चेंडाइज | Lifestyle Merchandise', icon: '👕' },
//     { id: 'herbal', name: 'हर्बल एवं आयुर्वेदिक उत्पाद | Herbal & Ayurvedic Products', icon: '🌿' },
//     { id: 'gift', name: 'गिफ्ट एवं होम डेकोर | Gift & Home Decor', icon: '🎁' }
//   ];
  
//   // Products data with stories
//   const jharkhandProducts = [
//     // Art & Painting
//     { 
//       id: 1, 
//       name: 'सोहराय हैंड पेंटेड कैनवास', 
//       englishName: 'Sohrai Hand-Painted Canvas', 
//       category: 'art', 
//       price: '₹1,200 - ₹4,500', 
//       description: 'Traditional Sohrai tribal painting on canvas depicting nature and animals.', 
//       image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//       story: `सोहराय कला झारखंड की प्राचीन आदिवासी कला है जो हजारों साल पुरानी है। यह कला विशेष रूप से सर्दियों के मौसम में सोहराय त्योहार के दौरान बनाई जाती है। महिलाएं अपने घरों की दीवारों पर प्राकृतिक रंगों से जानवरों, पक्षियों और प्रकृति के चित्र बनाती हैं। यह कला पीढ़ी-दर-पीढ़ी चली आ रही है और आज भी झारखंड के गाँवों में जीवित है।

// Sohrai art is one of the oldest tribal art forms of Jharkhand, dating back thousands of years. This art is specially created during the Sohrai festival in winter season. Women paint animals, birds and nature motifs on their house walls using natural colors. This art has been passed down through generations and is still alive in Jharkhand villages.

// **कला की विशेषताएं (Art Features):**
// • प्राकृतिक रंगों का उपयोग (Use of natural colors)
// • जानवरों और प्रकृति के चित्र (Depictions of animals and nature)
// • ज्यामितीय पैटर्न (Geometric patterns)
// • सांस्कृतिक महत्व (Cultural significance)

// **कलाकार:** स्थानीय आदिवासी महिलाएं
// **उपयोग:** घर की सजावट, संग्रहणीय कला
// **प्रामाणिकता:** 100% हस्तनिर्मित` 
//     },
//     { 
//       id: 2, 
//       name: 'कोहबर वॉल फ्रेम', 
//       englishName: 'Kohbar Wall Frame', 
//       category: 'art', 
//       price: '₹900 - ₹3,500', 
//       description: 'Kohbar art wall frames showcasing traditional tribal marriage motifs.', 
//       image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//       story: `कोहबर कला झारखंड की विवाह संबंधी कला है जो शादी के समय दुल्हन के कमरे में बनाई जाती है। यह कला प्रजनन क्षमता, समृद्धि और सुखी वैवाहिक जीवन का प्रतीक है। कोहबर में फूल, पत्ते, जानवर और ज्यामितीय आकृतियों का उपयोग किया जाता है।

// Kohbar art is the marriage-related art of Jharkhand painted in the bride's room during weddings. This art symbolizes fertility, prosperity and happy married life. Kohbar uses flowers, leaves, animals and geometric shapes.

// **पारंपरिक महत्व:** विवाह समारोह का अभिन्न अंग
// **प्रतीकात्मकता:** प्रेम, एकता और समृद्धि
// **रंग:** लाल, सफेद और काले रंगों का प्रयोग` 
//     },
//     { 
//       id: 3, 
//       name: 'आदिवासी मोटिफ आर्ट पेंटिंग', 
//       englishName: 'Tribal Motif Art Painting', 
//       category: 'art', 
//       price: '₹800 - ₹3,000', 
//       description: 'Traditional tribal motif paintings depicting cultural symbols.', 
//       image: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//       story: `आदिवासी मोटिफ कला झारखंड के विभिन्न जनजातियों की सांस्कृतिक पहचान को दर्शाती है। हर मोटिफ का अपना अर्थ और महत्व है। ये चित्र प्रकृति, दैनिक जीवन और आध्यात्मिक विश्वासों से प्रेरित हैं।

// Tribal motif art represents the cultural identity of various tribes of Jharkhand. Each motif has its own meaning and significance. These paintings are inspired by nature, daily life and spiritual beliefs.` 
//     },
//     { 
//       id: 4, 
//       name: 'सोहराय वॉल हैंगिंग', 
//       englishName: 'Sohrai Wall Hanging', 
//       category: 'art', 
//       price: '₹600 - ₹2,500', 
//       description: 'Handcrafted wall hangings with Sohrai art patterns.', 
//       image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//       story: `सोहराय वॉल हैंगिंग पारंपरिक कला को आधुनिक घरों में लाने का एक तरीका है। ये हैंगिंग कपड़े या कैनवास पर हस्तनिर्मित होते हैं और सोहराय के पारंपरिक डिजाइन को दर्शाते हैं।

// Sohrai wall hangings are a way to bring traditional art to modern homes. These hangings are handmade on cloth or canvas and showcase traditional Sohrai designs.` 
//     },
    
//     // Handloom & Textile
//     { 
//       id: 6, 
//       name: 'तसर सिल्क आदिवासी साड़ी', 
//       englishName: 'Tussar Silk Tribal Saree', 
//       category: 'handloom', 
//       price: '₹2,500 - ₹9,000', 
//       description: 'Pure Tussar silk saree with traditional tribal patterns.', 
//       image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//       story: `तसर सिल्क झारखंड की प्रसिद्ध रेशम की विविधता है जो जंगली रेशमकीटों से प्राप्त होती है। यह साड़ी पूरी तरह से हाथ से बुनी जाती है और आदिवासी पैटर्न से सजाई जाती है। तसर सिल्क प्राकृतिक, इको-फ्रेंडली और सांस लेने योग्य होती है।

// Tussar silk is Jharkhand's famous variety of silk obtained from wild silkworms. This saree is completely handwoven and adorned with tribal patterns. Tussar silk is natural, eco-friendly and breathable.

// **विशेषताएं:**
// • 100% शुद्ध तसर रेशम
// • हाथ से बुना हुआ
// • प्राकृतिक रंग
// • आदिवासी डिजाइन
// • पारंपरिक बुनाई तकनीक` 
//     },
//     { 
//       id: 7, 
//       name: 'झारखंड हैंडलूम दुपट्टा', 
//       englishName: 'Jharkhand Handloom Dupatta', 
//       category: 'handloom', 
//       price: '₹400 - ₹1,800', 
//       description: 'Handwoven dupatta with tribal designs and patterns.', 
//       image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//       story: `झारखंड का हैंडलूम दुपट्टा स्थानीय कारीगरों द्वारा पारंपरिक तकनीक से बुना जाता है। इसमें प्राकृतिक रंगों और आदिवासी डिजाइनों का उपयोग किया जाता है। यह दुपट्टा न केवल फैशनेबल है बल्कि स्थानीय कारीगरों के कौशल को भी समर्थन देता है।

// Jharkhand handloom dupatta is woven by local artisans using traditional techniques. It uses natural colors and tribal designs. This dupatta is not only fashionable but also supports local artisans' skills.` 
//     },
    
//     // Forest-Based Products
//     { 
//       id: 11, 
//       name: 'साल पत्ता प्लेट', 
//       englishName: 'Sal Leaf Plate', 
//       category: 'forest', 
//       price: '₹50 - ₹200', 
//       description: 'Eco-friendly plates made from Sal leaves, biodegradable.', 
//       image: 'https://images.unsplash.com/photo-1513789181297-4c76d69fc4d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//       story: `साल के पत्तों से बनी प्लेटें झारखंड की पारंपरिक और पर्यावरण अनुकूल उत्पाद हैं। ये प्लेटें पूरी तरह से प्राकृतिक और बायोडिग्रेडेबल हैं। साल के पेड़ झारखंड के जंगलों में प्रचुर मात्रा में पाए जाते हैं और इनके पत्तों से बने उत्पाद स्थानीय अर्थव्यवस्था को बढ़ावा देते हैं।

// Sal leaf plates are traditional and eco-friendly products of Jharkhand. These plates are completely natural and biodegradable. Sal trees are abundant in Jharkhand forests and products made from their leaves boost the local economy.

// **पर्यावरण लाभ:**
// • 100% बायोडिग्रेडेबल
// • प्लास्टिक मुक्त
// • कम्पोस्ट होने योग्य
// • प्राकृतिक और नॉन-टॉक्सिक

// **उपयोग:** भोजन परोसने, पिकनिक, शादी समारोह` 
//     },
    
//     // Traditional Food Products
//     { 
//       id: 16, 
//       name: 'महुआ फूल सूखा', 
//       englishName: 'Mahua Flower Dry', 
//       category: 'food', 
//       price: '₹200 - ₹800 per kg', 
//       description: 'Dried Mahua flowers, used in traditional tribal cuisine.', 
//       image: 'https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//       story: `महुआ फूल झारखंड के आदिवासी समुदायों के लिए एक पवित्र वृक्ष है। महुआ के फूल पौष्टिक होते हैं और पारंपरिक व्यंजनों में उपयोग किए जाते हैं। इन फूलों को सुखाकर लंबे समय तक संग्रहीत किया जा सकता है।

// Mahua tree is sacred for tribal communities of Jharkhand. Mahua flowers are nutritious and used in traditional dishes. These flowers can be dried and stored for long periods.

// **पौष्टिकता:** विटामिन और मिनरल्स से भरपूर
// **पारंपरिक उपयोग:** व्यंजन, मदिरा, औषधि
// **सांस्कृतिक महत्व:** आदिवासी त्योहारों और अनुष्ठानों में महत्वपूर्ण` 
//     },
    
//     // Add more products with stories as needed...
//   ];
  
//   // T-Shirt Quotes data
//   const tshirtQuotes = [
//     { category: 'Jharkhandi / Desi Hindi', quotes: [
//       'झारखंडिया बानी, जान से',
//       'जंगल मां जी से जुड़ल',
//       'अपना जंगल, अपना पहचान',
//       'माटी में जम बा',
//       'सीधा दिल, मजबूत इरादा'
//     ]},
//     { category: 'Santhali Style Quotes', quotes: [
//       'हापरामको झारखंड',
//       'होर होपोन',
//       'जंगल हमर पहचान',
//       'दिसोम से प्यार',
//       'आदिवासी बानी'
//     ]},
//     { category: 'Jharkhand Pride / Identity', quotes: [
//       'अपना झारखंड, अपनी जान',
//       'झारखंड से हैं, दिल से हैं',
//       'जंगल की माटी, मजबूत पहचान',
//       'जहाँ जंगल, वहीं जीवन',
//       'झारखंडी हाँ, गर्व से'
//     ]},
//     { category: 'Short Bold Street-Style', quotes: [
//       'जोहार',
//       'आदिवासी',
//       'जंगल',
//       'दिसोम',
//       'झारखंड'
//     ]},
//     { category: 'Festival & Culture', quotes: [
//       'सरहुल के जय',
//       'जंगल देवता के प्रणाम',
//       'करम परब के मान',
//       'करम देवता के जय',
//       'माटी, पेड़ और परंपरा'
//     ]},
//     { category: 'Village Roots / Jungle Life', quotes: [
//       'जंगल की हवा, सुकून भरा जीवन',
//       'माटी की खुशबू, दिल में बसी',
//       'पहाड़, पेड़ और अपनापन',
//       'जंगल में जड़, जीवन में जम'
//     ]},
//     { category: 'Kurukh / Oraon Touch', quotes: [
//       'हम ओरांव छी',
//       'कुरुख हमर भाषा',
//       'माटी हमर मान',
//       'जंगल से जुड़ल छी',
//       'कुरुख हमारी पहचान'
//     ]},
//     { category: 'Funny / Youth Desi Style', quotes: [
//       'सादा जीवन, झारखंडी SWAG',
//       'स्टाइल देसी, सोच जंगल वाली',
//       'शहर देखा, जंगल नहीं भूला',
//       'कम बोल, माटी बोल',
//       'सुकून चाहिए? जंगल आ जाओ'
//     ]},
//     { category: 'Spiritual / Sanskriti Touch', quotes: [
//       'प्रकृति ही धर्म है',
//       'माटी ही माता है',
//       'जंगल हमारा मंदिर',
//       'संस्कार हमारी धरोहर'
//     ]}
//   ];
  
//   // Filter products based on search and category
//   const jharkhandFilteredProducts = jharkhandProducts.filter(product => {
//     const matchesSearch = jharkhandSearchTerm === '' || 
//       product.name.toLowerCase().includes(jharkhandSearchTerm.toLowerCase()) ||
//       product.englishName.toLowerCase().includes(jharkhandSearchTerm.toLowerCase()) ||
//       product.description.toLowerCase().includes(jharkhandSearchTerm.toLowerCase());
    
//     const matchesCategory = jharkhandSelectedCategory === 'all' || product.category === jharkhandSelectedCategory;
    
//     return matchesSearch && matchesCategory;
//   });
  
//   // Handle category change
//   const handleJharkhandCategoryChange = (categoryId) => {
//     setJharkhandSelectedCategory(categoryId);
//     setJharkhandActiveTab(categoryId);
//   };
  
//   // Handle search
//   const handleJharkhandSearch = (e) => {
//     setJharkhandSearchTerm(e.target.value);
//   };
  
//   // Clear filters
//   const clearJharkhandFilters = () => {
//     setJharkhandSearchTerm('');
//     setJharkhandSelectedCategory('all');
//     setJharkhandActiveTab('all');
//   };

//   // Handle view story
//   const handleViewStory = (product) => {
//     setSelectedProduct(product);
//     setShowStoryPopup(true);
//   };

//   // Close story popup
//   const closeStoryPopup = () => {
//     setShowStoryPopup(false);
//     setSelectedProduct(null);
//   };

//   // Main products page
//   return (
//     <div className="jharkhand-products-container">
//       {/* Story Popup */}
//       {showStoryPopup && selectedProduct && (
//         <div className="jharkhand-story-popup-overlay">
//           <div className="jharkhand-story-popup">
//             <div className="jharkhand-story-popup-header">
//               <h3>
//                 <i className="fas fa-book"></i> {selectedProduct.name}
//               </h3>
//              <button className="jharkhand-close-popup" onClick={closeStoryPopup}>
//   ✕
// </button>

//             </div>
            
//             <div className="jharkhand-story-popup-content">
//               <div className="jharkhand-story-left">
//                 <img src={selectedProduct.image} alt={selectedProduct.name} />
//                 <div className="jharkhand-story-image-info">
//                   {/* <h4>{selectedProduct.englishName}</h4>
//                   <p className="jharkhand-story-price">{selectedProduct.price}</p> */}
//                   <div className="jharkhand-story-category">
//                     <span className="jharkhand-story-category-icon">
//                       {jharkhandCategories.find(cat => cat.id === selectedProduct.category)?.icon}
//                     </span>
//                     <span className="jharkhand-story-category-name">
//                       {jharkhandCategories.find(cat => cat.id === selectedProduct.category)?.name.split('|')[0].trim()}
//                     </span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="jharkhand-story-right">
//                 <div className="jharkhand-story-details">
//                   <h4 className="jharkhand-story-title">कहानी और परंपरा | Story & Tradition</h4>
//                   <div className="jharkhand-story-text">
//                     {selectedProduct.story.split('\n\n').map((paragraph, index) => (
//                       <p key={index} className="jharkhand-story-paragraph">
//                         {paragraph}
//                       </p>
//                     ))}
//                   </div>
                  
//                   <div className="jharkhand-story-highlights">
//                     <h5>
//                       <i className="fas fa-star"></i> मुख्य विशेषताएं | Key Features
//                     </h5>
//                     <ul className="jharkhand-story-list">
//                       <li>100% हस्तनिर्मित | 100% Handmade</li>
//                       <li>प्राकृतिक सामग्री | Natural Materials</li>
//                       <li>पारंपरिक तकनीक | Traditional Techniques</li>
//                       <li>स्थानीय कारीगर | Local Artisans</li>
//                       <li>पर्यावरण अनुकूल | Eco-Friendly</li>
//                     </ul>
//                   </div>
                  
//                   <div className="jharkhand-story-footer">
//                     <p className="jharkhand-story-note">
//                       <i className="fas fa-info-circle"></i> यह उत्पाद झारखंड के स्थानीय कारीगरों द्वारा पारंपरिक तरीकों से बनाया गया है।
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Header Section with Background Image */}
//       <header className="jharkhand-main-header">
//         <div className="jharkhand-header-overlay"></div>
//         <div className="jharkhand-header-content">
//           <h1 className="jharkhand-title">JHARKHAND</h1>
//           <p className="jharkhand-subtitle">Tribal Culture & Forest Products</p>
//           <div className="jharkhand-header-line"></div>
//         </div>
//       </header>
      
//       <div className="jharkhand-container">
//         {/* Search and Filter Section */}
//         <div className="jharkhand-filters-section">
//           <div className="jharkhand-filter-group">
//             <div className="jharkhand-search-box">
//               <i className="fas fa-search"></i>
//               <input 
//                 type="text" 
//                 placeholder="Search Jharkhand products..." 
//                 value={jharkhandSearchTerm}
//                 onChange={handleJharkhandSearch}
//               />
//             </div>
            
//             <div className="jharkhand-category-select">
//               <i className="fas fa-filter"></i>
//               <select 
//                 value={jharkhandSelectedCategory} 
//                 onChange={(e) => handleJharkhandCategoryChange(e.target.value)}
//               >
//                 {jharkhandCategories.map(category => (
//                   <option key={category.id} value={category.id}>
//                     {category.icon} {category.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             <button className="jharkhand-clear-btn" onClick={clearJharkhandFilters}>
//               <i className="fas fa-times"></i> Clear Filters
//             </button>
//           </div>
          
//           <div className="jharkhand-results-info">
//             <span className="jharkhand-product-count">{jharkhandFilteredProducts.length}</span> Products Found
//           </div>
//         </div>
        
//         {/* Category Tabs */}
//         <div className="jharkhand-category-tabs">
//           {jharkhandCategories.map(category => (
//             <button 
//               key={category.id}
//               className={`jharkhand-tab-btn ${jharkhandActiveTab === category.id ? 'jharkhand-active' : ''}`}
//               onClick={() => handleJharkhandCategoryChange(category.id)}
//             >
//               <span className="jharkhand-tab-icon">{category.icon}</span>
//               <span className="jharkhand-tab-name">{category.name.split('|')[0].trim()}</span>
//             </button>
//           ))}
//         </div>
        
        
//         {/* Products Grid */}
//         {jharkhandFilteredProducts.length > 0 ? (
//           <div className="jharkhand-products-grid">
//             {jharkhandFilteredProducts.map(product => (
//               <div className="jharkhand-product-card" key={product.id}>
//                 <div className="jharkhand-product-image">
//                   <img src={product.image} alt={product.name} />
//                   <div className="jharkhand-product-category">
//                     {jharkhandCategories.find(cat => cat.id === product.category)?.icon}
//                     {jharkhandCategories.find(cat => cat.id === product.category)?.name.split('|')[0].trim()}
//                   </div>
//                 </div>
                
//                 <div className="jharkhand-product-content">
//                   <h3 className="jharkhand-product-name">{product.name}</h3>
//                   <p className="jharkhand-product-english">{product.englishName}</p>
                  
//                   <p className="jharkhand-product-description">{product.description}</p>
                  
//                   {/* <div className="jharkhand-product-price">{product.price}</div> */}
                  
//                   <div className="jharkhand-product-actions">
//                     <button 
//                       className="jharkhand-view-btn"
//                       onClick={() => handleViewStory(product)}
//                     >
//                       <i className="fas fa-book"></i> View Story
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="jharkhand-no-results">
//             <i className="fas fa-search"></i>
//             <h3>No Products Found</h3>
//             <p>Try a different search term or category</p>
//             <button className="jharkhand-clear-btn" onClick={clearJharkhandFilters}>
//               Clear All Filters
//             </button>
//           </div>
//         )}
        
//         {/* T-Shirt Quotes Section */}
//         <div className="jharkhand-quotes-section">
//           <h2 className="jharkhand-quotes-title">Traditional T-Shirt Quotes</h2>
//           <div className="jharkhand-quotes-grid">
//             {tshirtQuotes.map((quoteCategory, index) => (
//               <div className="jharkhand-quote-category" key={index}>
//                 <h3 className="jharkhand-quote-category-title">{quoteCategory.category}</h3>
//                 <ul className="jharkhand-quote-list">
//                   {quoteCategory.quotes.map((quote, idx) => (
//                     <li className="jharkhand-quote-item" key={idx}>{quote}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Footer */}
//         <footer className="jharkhand-footer">
//           <p>Explore the rich tribal heritage and forest products of Jharkhand.</p>
//           <p className="jharkhand-copyright">© {new Date().getFullYear()} Jharkhand Tribal Products. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default JharkhandProducts;