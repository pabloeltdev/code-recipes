import { Icon } from "@iconify/react/dist/iconify.js";

import styles from "@/assets/styles/ui/search_bar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBox}>
        <input id="search" type="text" placeholder="Search..." />
        <label htmlFor="search">
          <Icon
            className="h-full text-base"
            icon="heroicons:magnifying-glass-solid"
          />
        </label>
      </div>
    </div>
  );
}
