import React, { useState } from "react";
import { classNames } from "shared/lib/classNames/classnames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "widgets/LangSwitcher";
import BugButton from "app/providers/ErrorBoundary/ui/BugButton";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button";
import AppLink, { AppLinkTheme } from "shared/ui/Applink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-btn"
        onClick={onToggle}
        className={styles.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : `<`}
      </Button>
      <div className={styles.links}>
        <div className={styles.linkWithIcon}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={styles.link}
            to={RoutePath.main}
          >
            <MainIcon className={styles.icon} />
            <span className={styles.linkText}>{t("Главная")}</span>
          </AppLink>
        </div>
        <div className={styles.linkWithIcon}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={styles.link}
            to={RoutePath.about}
          >
            {" "}
            <AboutIcon className={styles.icon} />
            <span className={styles.linkText}>{t("О нас")}</span>
          </AppLink>
        </div>
      </div>
      <BugButton />
      <div className={styles.themeSwitcher}>
        <ThemeSwitcher themeBtn={ThemeButton.CLEAR} />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
