import styled from 'styled-components';


export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: 2rem;
	margin: auto;
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 40px;
	margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const FeatureColumn = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #f3f3f3;
	padding: 40px 10px;
	border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid #000;
	padding: 30px;
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;
	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;