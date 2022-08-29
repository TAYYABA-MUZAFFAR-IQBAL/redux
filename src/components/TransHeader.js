// import { useSelector } from "react-redux";
import { Heading, Columns } from "react-bulma-components";
// import { selectTranslations } from "../features/i18next/i18nSlice";
import { LangSwitcher } from "../features/LangSwitcher/LangSwitcher";
 import useTranslations from "../features/services/useTranslations";

export default function HeaderTrans() {
//   const t = useSelector(selectTranslations);
  const { t } = useTranslations();

  return (
    <header>
      <Columns>
        <Columns.Column>
          <Heading>
            {t.tagline}
          </Heading>
        </Columns.Column>
        <Columns.Column>
          <LangSwitcher />
        </Columns.Column>
      </Columns>
    </header>
  );
}
