import React from 'react';
import { Container} from './styles/Container.styled';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureName,
	FeatureTextWrapper,
	
} from './styles/About.styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faCarBattery } from '@fortawesome/free-solid-svg-icons'
import { faTags } from '@fortawesome/free-solid-svg-icons'




const Features = () => {
	

	return (
		<Container smPadding="50px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>What We Offer</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
					
						<FeatureColumn>
							<FontAwesomeIcon icon={faTools} size="2x" color="#FFB21C" />
							<FeatureName>Best Maintainance</FeatureName>
							<FeatureText>We offer the best car maintainance, which makes us stand out</FeatureText>
						</FeatureColumn>
				
						<FeatureColumn>
							<FontAwesomeIcon icon={faCarBattery} size="2x" color="#FFB21C"/>
							<FeatureName>Best Car Engines</FeatureName>
							<FeatureText>Our engines is constructed by the best engineers in the world</FeatureText>
						</FeatureColumn>

						<FeatureColumn>
							<FontAwesomeIcon icon={faTags} size="2x" color="#FFB21C" />
							<FeatureName>Best Prices</FeatureName>
							<FeatureText>We offer the best quality for the lowest price</FeatureText>
						</FeatureColumn>
				</FeatureWrapper>
			</Container>
		</Container>
	);
};

export default Features;