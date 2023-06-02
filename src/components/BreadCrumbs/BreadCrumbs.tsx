import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { FC } from "react";
import styled from "@emotion/styled";

interface BreadCrumbsProps {
  breadcrumb: Array<{
    itemId: string;
    name: string;
  }>;
}

const CustomBreadcrumbs: FC<BreadCrumbsProps> = ({ breadcrumb }) => {
  return (
    <StyledStack spacing={2}>
      <StyledBreadcrumbs
        separator={<NavigateNextIcon fontSize="medium" />}
        aria-label="breadcrumb"
      >
        {breadcrumb.map((item, index) => (
          <StyledTypography
            key={item.itemId}
            variant="body1"
            color={
              index === breadcrumb.length - 1
                ? "textColor.lightgray"
                : "textColor.main"
            }
          >
            {item.name}
          </StyledTypography>
        ))}
      </StyledBreadcrumbs>
    </StyledStack>
  );
};

const StyledTypography = styled(Typography)({
  fontWeight: "400",
});

const StyledStack = styled(Stack)({
  margin: "25px 0px",
});

const StyledBreadcrumbs = styled(Breadcrumbs)({
  "& .MuiBreadcrumbs-separator": {
    marginLeft: "4px",
    marginRight: "1px",
  },
});

export default CustomBreadcrumbs;
