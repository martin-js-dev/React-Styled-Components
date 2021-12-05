import React from 'react';
import { Container} from './styles/Container.styled';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './styles/About.styled';


import { IoIosOptions } from 'react-icons/io';
import { GrHostMaintenance } from 'react-icons/gr';

const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

// DATA 
export const featuresData = [
	{
		name: 'Best Maintainance',
		description: 'We offer the best car maintainance, which makes us stand out',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'one',
	},
	{
		name: 'Best Car Engines',
		description: 'Our engines is constructed by the best engineers in the world',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Best Prices',
		description: 'We offer the best quality for the lowest price',
		icon: iconStyle(IoIosOptions),
		imgClass: 'three',
	},
	
];




const Features = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<Container smPadding="50px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>What We Offer</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{featuresData.map((el, index) => (
						<FeatureColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
						>
							<FeatureImageWrapper className={el.imgClass}>
								{el.icon}
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</Container>
	);
};

export default Features;