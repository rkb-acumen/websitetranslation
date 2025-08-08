// // app/Homeapi.jsx
// import { cookies } from "next/headers";
// import { translateText } from "@/utils/serverTranslate";
// import { API_END_POINT } from "../apicommon/apicommon";
// import Navbar from "@/Navbar/Navbar";
// import Transform from "@/components/Homecomponents/Transform/Transform";
// import Colorchange from "./Colorchange/colorchange";
// import Homescroll from "@/components/Homecomponents/Homescroll/Homescroll";
// import InsightsAPI from "@/components/Homecomponents/Insights/API/InsightsAPI";
// import styles from "@/components/Homecomponents/Home.module.css";

// const Homeapi = async () => {
//   try {
//     // Read language cookie on the server side
//     const cookieStore = cookies();
//     const language = cookieStore.get("language")?.value || "en";

//     // Fetch home page data
//     const response = await fetch(
//       `${API_END_POINT}/wp-json/wp/v2/pages?slug=home&_embed&acf_format=standard`,
//       { next: { revalidate: 50 } }
//     );

//     const datas = await response.json();
//     console.log("Fetched data:", JSON.stringify(datas, null, 2));

//     // Extract all text for translation - improved logic
//     const allText = datas.flatMap((val) => {
//       const texts = [];

//       // Use rendered title if acf.title is missing
//       if (val.title?.rendered) texts.push(val.title.rendered);
//       else if (val.acf?.title) texts.push(val.acf.title);

//       if (val.acf?.subtitle) texts.push(val.acf.subtitle);
//       if (val.acf?.description) texts.push(val.acf.description);
//       if (val.acf?.our_process_title) texts.push(val.acf.our_process_title);

//       if (Array.isArray(val.acf?.our_process_content)) {
//         val.acf.our_process_content.forEach((item) => {
//           if (item.our_process_title) texts.push(item.our_process_title);
//         });
//       }

//       if (val.acf?.our_sucess_stories_client_description) {
//         texts.push(val.acf.our_sucess_stories_client_description);
//       }

//       return texts;
//     });

//     console.log("Language cookie:", language);
//     console.log("Texts to translate:", allText);

//     // Call translateText util
//     const translated = await translateText(allText, language);

//     console.log("Translated texts:", translated);

//     // Map translations back to data structure (be careful with indexing)
//     let i = 0;
//     const translatedData = datas.map((val) => {
//       // Create a shallow copy of acf so we can update translated texts
//       const newAcf = { ...val.acf };

//       // Assign translated texts in order, making sure to not break if missing
//       if (val.title?.rendered || val.acf?.title) {
//         newAcf.title = translated[i++] || newAcf.title;
//       }
//       if (val.acf?.subtitle) {
//         newAcf.subtitle = translated[i++] || newAcf.subtitle;
//       }
//       if (val.acf?.description) {
//         newAcf.description = translated[i++] || newAcf.description;
//       }
//       if (val.acf?.our_process_title) {
//         newAcf.our_process_title = translated[i++] || newAcf.our_process_title;
//       }

//       if (Array.isArray(val.acf?.our_process_content)) {
//         newAcf.our_process_content = val.acf.our_process_content.map((item) => {
//           if (item.our_process_title) {
//             return {
//               ...item,
//               our_process_title: translated[i++] || item.our_process_title,
//             };
//           }
//           return item;
//         });
//       }

//       if (val.acf?.our_sucess_stories_client_description) {
//         newAcf.our_sucess_stories_client_description =
//           translated[i++] || newAcf.our_sucess_stories_client_description;
//       }

//       return {
//         ...val,
//         acf: newAcf,
//       };
//     });

//     return (
//       <>
//         <Navbar
//           home_headerlogo={styles.home_headerlogo}
//           home_headerinner={styles.home_headerinner}
//           home_curve={styles.home_headercurve}
//         />
//         {translatedData.map((val) => (
//           <div key={val.id} className="relative overflow-hidden">
//             <div>Hi hello this is for test</div>
//             <Transform data={val} />
//             <Colorchange val={val} />
//             <Homescroll val={val} />
//             <InsightsAPI />
//           </div>
//         ))}
//       </>
//     );
//   } catch (error) {
//     console.error("Error fetching or translating data:", error);
//     return (
//       <div className="flex h-screen justify-center items-center text-center">
//         <div>
//           <div className="lds-spinner">
//             <div></div>
//             <div></div>
//           </div>
//           <h2 className="pt-5">Network issue, please check your connection!</h2>
//         </div>
//       </div>
//     );
//   }
// };

// export default Homeapi;



// app/Homeapi.jsx
import { cookies } from "next/headers";
import { translateText } from "@/utils/serverTranslate";
import { extractTextForTranslation, injectTranslatedText } from "@/utils/translateUtils";
import { API_END_POINT } from "../apicommon/apicommon";
import Navbar from "@/Navbar/Navbar";
import Transform from "@/components/Homecomponents/Transform/Transform";
import Colorchange from "./Colorchange/colorchange";
import Homescroll from "@/components/Homecomponents/Homescroll/Homescroll";
import InsightsAPI from "@/components/Homecomponents/Insights/API/InsightsAPI";
import styles from "@/components/Homecomponents/Home.module.css";

const Homeapi = async () => {
  try {
    const cookieStore = cookies();
    const language = cookieStore.get("language")?.value || "en";

    const response = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/pages?slug=home&_embed&acf_format=standard`,
      { next: { revalidate: 50 } }
    );
    const rawData = await response.json();

    const { texts, paths } = extractTextForTranslation(rawData);
    const translatedTexts = await translateText(texts, language);
    const translatedData = injectTranslatedText(rawData, paths, translatedTexts);

    return (
      <>
        <Navbar
          home_headerlogo={styles.home_headerlogo}
          home_headerinner={styles.home_headerinner}
          home_curve={styles.home_headercurve}
        />
        {translatedData.map((val,i) => (
          <div key={val.id} className="relative overflow-hidden">
            <Transform data={val} />
            <Colorchange val={val} hrefData={rawData[i].acf?.section_two_content} solData={rawData[i].acf?.solution_two_content} />
            <Homescroll val={val} />
            <InsightsAPI />
          </div>
        ))}
      </>
    );
  } catch (error) {
    console.error("Error fetching or translating data:", error);
    return (
      <div className="flex h-screen justify-center items-center text-center">
        <div>
          <div className="lds-spinner">
            <div></div><div></div>
          </div>
          <h2 className="pt-5">Network issue, please check your connection!</h2>
        </div>
      </div>
    );
  }
};

export default Homeapi;
