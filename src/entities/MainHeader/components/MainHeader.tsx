import React, { useState, useEffect } from "react";
import { HeaderContainer } from "../../../shared/components";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../../shared/components";
import { Burger } from "./BurgerMenu";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import burgerMenu from "../assets/burger.svg";
import style from "../styles/Style.module.css";
import { NavLink } from "react-router-dom";

export const MainHeader = () => {
    let navigate = useNavigate();

    const [scrolled, setScrolled] = useState(false);
    const [burger, setBurger] = useState<boolean>(false);

    const handleBodyScroll = () => {
        if (burger) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    useEffect(() => {
        handleBodyScroll();
    }, [burger]);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <HeaderContainer
            background={scrolled}
            header={
                <Header>
                    <Icon
                        style={{ display: "block" }}
                        width={"160px"}
                        height={"65px"}
                        iconSize={"160px"}
                        onClick={() => {
                            navigate("/");
                        }}
                        icon={logo}
                    />
                    <Navbar>
                        <NavLink
                            to={"/catalog"}
                            className={({ isActive }) =>
                                isActive ? style.ALink : style.link
                            }
                        >
                            Каталог
                        </NavLink>
                        <NavLink
                            to={"/bookmarks"}
                            className={({ isActive }) =>
                                isActive ? style.ALink : style.link
                            }
                        >
                            Закладки
                        </NavLink>
                        <NavLink
                            to={"/aboutUs"}
                            className={({ isActive }) =>
                                isActive ? style.ALink : style.link
                            }
                        >
                            О нас
                        </NavLink>
                    </Navbar>
                    <SecondaryBlock>
                        <Icon
                            width={"40px"}
                            height={"40px"}
                            iconSize={"40px"}
                            icon={search}
                            type={"true"}
                            onClick={() => {
                                navigate("/search");
                            }}
                        />
                        <Icon
                            width={"40px"}
                            height={"40px"}
                            iconSize={"40px"}
                            icon={burgerMenu}
                            onClick={() => {
                                setBurger(true);
                            }}
                        />
                    </SecondaryBlock>
                    <Burger burger={burger} click={setBurger} />
                </Header>
            }
        />
    );
};

type PropsStyled = {
    icon: string;
    width: string;
    height: string;
    iconSize: string;
    type?: string;
};

const Header = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Icon = styled.div`
    display: ${({ type }: PropsStyled) => (type ? "block" : "none")};
    min-width: ${({ width }: PropsStyled) => width};
    min-height: ${({ height }: PropsStyled) => height};
    background: url(${({ icon }: PropsStyled) => icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${({ iconSize }: PropsStyled) => iconSize};
    cursor: pointer;

    @media (max-width: 700px) {
        display: ${({ type }: PropsStyled) => (type ? "none" : "block")};
    }
`;

const Navbar = styled.div`
    display: flex;
    width: 40%;
    gap: 10px;

    align-items: center;
    justify-content: space-around;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;

    @media (max-width: 700px) {
        display: none;
    }
`;

const SecondaryBlock = styled.div`
    display: flex;
`;
