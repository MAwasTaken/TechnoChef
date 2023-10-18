import React, { useState } from 'react';
// import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface UserItem {
	title: string;
	content: string;
}

interface UserProps {
	items: UserItem[];
}

const AdminUserBox: React.FC<UserProps> = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div>
			{/* {items.map((item, index) => (
                <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.content}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))} */}
		</div>
	);
};

export default AdminUserBox;
