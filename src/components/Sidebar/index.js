import React from 'react';
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SidebtnWrap } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
<SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon/>
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="About" onClick={toggle}>
            الرئيسية            </SidebarLink>
            <SidebarLink to="About" onClick={toggle}>
             في طريقك
            </SidebarLink>
            <SidebarLink to="About" onClick={toggle}>
            تواصل معنا
            </SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
            <SidebarRoute to="/">hello</SidebarRoute>
        </SidebtnWrap>
    </SidebarWrapper>
</SidebarContainer>

  );
};

export default Sidebar;
