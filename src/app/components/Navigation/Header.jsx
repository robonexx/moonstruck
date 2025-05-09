import React from 'react';
import Topbar from './Topbar';
import Nav from './Nav';
import NavItem from './NavItem';
import DropDown from './Dropdown';
import DropDownItem from './DropdownItem';

// styles
import styles from './Header.module.scss';

import { AiOutlineHome } from 'react-icons/ai';
import { RiArticleLine } from 'react-icons/ri';
import { SiMusicbrainz, SiHandshake } from 'react-icons/si';
import {
  MdOutlineHistoryEdu,
  MdOutlineAnnouncement,
  MdOutlineGroups,
} from 'react-icons/md';
import { GiFist, GiPlantRoots } from 'react-icons/gi';
import { WiTrain } from 'react-icons/wi';
import { FiMusic } from 'react-icons/fi';
import { FaRecordVinyl } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Topbar />
      <Nav>
        <NavItem title='Home' icon={<AiOutlineHome />} url='/' />
        <NavItem
          title='Internship Report'
          icon={<MdOutlineHistoryEdu />}
          url='/presentation'
        >
          <DropDown>
            <DropDownItem
              title='Presentation'
              icon={<SiMusicbrainz />}
              url='/presentation'
            />
            <DropDownItem title='Nothing' icon={<WiTrain />} url='/assignment' />
          </DropDown>
        </NavItem>
        <NavItem title='Assignment' icon={<GiPlantRoots />} url='/assignment' />
      </Nav>
    </div>
  );
};

export default Header;
