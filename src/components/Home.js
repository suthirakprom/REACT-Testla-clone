import React from 'react'
import styled from "styled-components";
import Section from "./Section"

function Home() {
    return (
        <Container>
            
            <Section 
                title="Model S"
                description="Order your Model-S Online"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model Y"
                description="Order your Model-Y Online"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model 3"
                description="Order your Model-3 Online"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model X"
                description="Order your Model-X Online"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Lower Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a new Roofs"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Accesories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
               
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
