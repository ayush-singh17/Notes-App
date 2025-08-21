import { Portal, Select, createListCollection } from "@chakra-ui/react"

export default function Font({font1,setFont}){

    const font_family =createListCollection({
        items: [
          { label: "Times New Roman", value: "'Times New Roman', serif" },
          { label: "Arial", value: "Arial, sans-serif" },
          { label: "Courier New", value: "'Courier New', monospace" },
          { label: "Georgia", value: "Georgia, serif" },
          { label: "Verdana", value: "Verdana, sans-serif" },
          { label: "Garamond", value: "Garamond, serif" },
          { label: "Trebuchet MS", value: "'Trebuchet MS', sans-serif" },
          { label: "Palatino", value: "Palatino, serif" },
          { label: "Tahoma", value: "Tahoma, sans-serif" },
          { label: "Geneva", value: "Geneva, sans-serif" },
          { label: "sans-serif", value: "sans-serif" },
        ],
    })

    return (
         <Select.Root collection={font_family} w={{base:"auto",lg:"200px"}} value={font1} onValueChange={(details)=>setFont(details.value)}>
            <Select.HiddenSelect />
            <Select.Label>Fonts</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder={font1} />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {font_family.items.map((fonts) => (
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