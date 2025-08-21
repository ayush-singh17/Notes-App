import { ColorPicker, HStack, Portal, parseColor,InputGroup } from "@chakra-ui/react"

export default function color({ color, setColor }){
    return(
        <ColorPicker.Root
        value={color ? parseColor(color) : undefined}
        onValueChange={(details) => {
            setColor(details.valueAsString);
        }}
        >
            <ColorPicker.HiddenInput />
            <ColorPicker.Label>Color</ColorPicker.Label>
            <ColorPicker.Control>
                <InputGroup
                endElementProps={{ px: "1" }}
                endElement={<ColorPicker.EyeDropper size="xs" variant="ghost" />}
                >
                <ColorPicker.Input />
                </InputGroup>
                <ColorPicker.Trigger />
            </ColorPicker.Control>
            <Portal>
                <ColorPicker.Positioner>
                <ColorPicker.Content>
                    <ColorPicker.Area />
                    <HStack>
                    <ColorPicker.EyeDropper size="xs" variant="outline" />
                    <ColorPicker.Sliders />
                    </HStack>
                </ColorPicker.Content>
                </ColorPicker.Positioner>
            </Portal>
        </ColorPicker.Root>
    );
}