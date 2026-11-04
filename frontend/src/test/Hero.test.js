import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_Page/home/Hero';

// Test suite for the Hero component

describe("Hero Component",()=>{
    test("renders hero image",()=>{
        render(<Hero />);
        const heroImage = screen.getByAltText("hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
    test("renders signup button", ()=>{
        render(<Hero />);
        const signupButton = screen.getByRole("button", {name:"/SignUp"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});
