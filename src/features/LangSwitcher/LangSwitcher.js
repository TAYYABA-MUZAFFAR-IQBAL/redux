import { Dropdown } from "react-bulma-components";
import {  useDispatch } from "react-redux";
// import { setLang } from "../services/i18nAPI";
import useTranslations from "../../features/services/useTranslations";
// ...
export function LangSwitcher() {
  const { lang, supportedLangs, setLang } = useTranslations();
  //   const lang = useSelector((state) => state.i18n.lang);
  //   const supportedLangs = useSelector(
  //     (state) => state.i18n.supportedLangs,
  //   );
  const dispatch = useDispatch();
  return (
    <Dropdown
      // ...
      value={lang}
      onChange={(newLang) => dispatch(setLang(newLang))}
    >
      {Object.entries(supportedLangs).map(([code, name]) => (
        <Dropdown.Item
          value={code}
          key={code}
          style={{ border: 1, backgroundColor: "grey", margin: 2 }}
        >
          {name}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}

// const lang = useSelector((state) => state.i18n.lang);
// // ...
// const dispatch = useDispatch();
// return (
//   <Dropdown
//     value={lang}
//     onChange={(newLang) =>
//       dispatch(setLangAsync(newLang))
//     }
//   >
//     <!-- Render items -->
//   </Dropdown>
// );
// }
