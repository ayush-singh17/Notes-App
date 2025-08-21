import { Portal, Select, createListCollection } from "@chakra-ui/react"

export default function Size({size,setSize}){

    const size_options =createListCollection({
    items: [
        { label: "xs", value: "xs" },
        { label: "ms", value: "sm" },
        { label: "md", value: "md" },
        { label: "lg", value: "lg" },
        { label: "xl", value: "xl" },
        ],
    })

    return (
        <Select.Root collection={size_options} w={{base:"auto",lg:"200px"}} value={size} onValueChange={(details)=>setSize(details.value)}>
            <Select.HiddenSelect />
            <Select.Label>Size</Select.Label>
            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder={size} />
                </Select.Trigger>
                <Select.IndicatorGroup>
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {size_options.items.map((fonts) => (
                        <Select.Item item={fonts} key={fonts.value}>
                            {fonts.label}
                            <Select.ItemIndicator />
                        </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    );
}
