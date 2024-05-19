import { Card,
CardHeader,
Heading,
CardBody,
Flex,
Text,
Box
} from "@chakra-ui/react";

export default function CompanyCard({ companyInfo }) {
  return (
    <Card align='center' m={12} maxW="lg">
    <CardHeader>
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Box>
            <Heading size="sm">{companyInfo.rAZAOSOCIAL}</Heading>
            <Text>{companyInfo.cNAEPRINCIPALDESCRICAO}</Text>
          </Box>
        </Flex>
      </Flex>
    </CardHeader>
    <CardBody>
      <Text>
      {companyInfo.cOMPLEMENTO}
      </Text>
    </CardBody>
  </Card>
  )
}
