import { Box, Flex, Text,Input,Textarea, Button, IconButton, List, ListItem } from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosSave } from "react-icons/io";
import { CiTextAlignLeft } from "react-icons/ci";
import { CiTextAlignCenter } from "react-icons/ci";
import { CiTextAlignRight } from "react-icons/ci";
import { CiTextAlignJustify } from "react-icons/ci";
import { MdFormatListBulleted } from "react-icons/md";
import { CiSquareCheck } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { BsTextarea } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import Color from "./color";
import Font from "./Font";
import Size from "./Size";
import { useState} from "react";



function Notes({updateViewNotes,addNotes,note,handleBack,updateNotes}){

    const navigate = useNavigate()

    const [align,setAlign]=useState(note ? note.align : 'left');
    const [textColor, setTextColor] = useState(note ? note.textColor : '#000000');
    const[font1,setFont]=useState(note ? note.font : 'sans-serif');
    const[size,setSize]=useState(note ? note.size : 'md');
    const[formatType,setFormatype]=useState(note ? note.formatType : 'text');
    const[check,setCheck]=useState(note ? note.check : []);
    const[input1,setInput]=useState('');
    const[bullet,setBullet]=useState(note ? note.bullet : []);
    const [checkedItems, setCheckedItems] = useState(note ? note.checkedItems : []);
    const[heading,setHeading]=useState(note ? note.heading : '');
    const[text,setText]=useState(note ? note.text : '');

    const toggleItem = (item) => {
        if (checkedItems.includes(item)) {
        setCheckedItems(checkedItems.filter((i) => i !== item));
        } else {
        setCheckedItems([...checkedItems, item]);
        }
    };

    const navi=()=>{
        handleBack();
        navigate('/');
    }

    const handleSave = () => {
        const newNote = {
            id: note? note.id:Date.now(),
            heading: heading,
            text: text,
            align: align,
            textColor: textColor,
            font: font1,
            size: size,
            checkedItems: checkedItems,
            check: check,
            bullet: bullet,
            isPinned:note?true:false,
        };

        if(note){
            updateNotes(newNote);
        }else{
            addNotes(newNote);
        }
        handleBack();
    };

    const renderNoteContent =()=>{
        switch(formatType){
            case 'bullet_point':
                return(<>
                    <Flex gap='10px' justify='center' alignItems='center'>
                        <IconButton
                            size="xl"
                            bg="gray.50"
                            color="black"
                            onClick={() => {
                                if (input1.trim() !== "") {
                                    setBullet([...bullet, input1]);
                                    setInput("");
                                }
                            }}
                            _hover={{
                            borderColor: "blackAlpha.500"
                            }}><IoMdAdd />
                        </IconButton>
                        <Input placeholder="Enter the text for the bullet_points..." value={input1} onChange={(e)=>setInput(e.target.value)}/>
                    </Flex>
                    <Box p={8}>
                        {bullet.map((value) => (
                            <List.Root key={value} value={value}>
                                <Flex gap='10px' alignItems='center'>
                                    <ListItem>{value}</ListItem>
                                    <IconButton
                                        size="sm"
                                        bg="gray.50"
                                        color="black"
                                        _hover={{
                                            borderColor: "blackAlpha.500"
                                        }}
                                        onClick={() => setBullet(bullet.filter((i) => i !== value))}
                                    ><MdDeleteForever /></IconButton>
                                </Flex>
                            </List.Root>
                        ))}
                    </Box>
                </>);
            case 'text':
                return(<Textarea
                placeholder="Start writing your note here..."
                variant="unstyled"
                h="100%"
                textAlign={align}
                style={{ color: textColor }}
                fontFamily={font1}
                fontSize={size}
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />);
            case 'check_list':
               return (
                    <>
                        <Flex gap='10px' justify='center' alignItems='center'>
                            <IconButton
                                aria-label="Save Note"
                                size="xl"
                                bg="gray.50"
                                color="black"
                                onClick={() => {
                                    if (input1.trim() !== "") {
                                        setCheck([...check, input1]);
                                        setInput("");
                                    }
                                }}
                                _hover={{
                                borderColor: "blackAlpha.500"
                                }}
                            >
                                <IoMdAdd />
                            </IconButton>
                            <Input
                                placeholder="Enter the text for the check-list..."
                                value={input1}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </Flex>

                        <Box p={4}>
                            <Box p={8}>
                                <Text fontWeight="bold" fontSize='lg'>Checklist:</Text>
                                <Box alignItems='center'>
                                    {check.map((item) => (
                                        <label key={item} style={{ display: "block" }}>
                                        <input
                                            type="checkbox"
                                            checked={checkedItems.includes(item)}
                                            onChange={() => toggleItem(item)}
                                        />
                                        {item}

                                        <IconButton
                                            size="sm"
                                            gap='10px'
                                            bg="gray.50"
                                            color="black"
                                            _hover={{ borderColor: "blackAlpha.500" }}
                                            onClick={() =>{
                                            setCheck(check.filter((i) => i !== item))
                                            setCheckedItems(checkedItems.filter((i) => i !== item))}}
                                        ><MdDeleteForever/></IconButton>
                                        </label>
                                    ))}
                                </Box>
                            </Box>
                            <Box p={8} alignItems='center'>
                                <Text fontWeight='bold' fontSize='md'>Checked items:</Text>
                                <p>{checkedItems.length ? checkedItems.join(", ") : "None"}</p>
                            </Box>
                        </Box>
                    </>
                    );

            default:
                return(<Textarea
                placeholder="Start writing your note here..."
                variant="unstyled"
                h="100%"
                textAlign={align}
                style={{ color: textColor }}
                fontFamily={font1}
                fontSize={size}
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />);
        }
    };

    return (
        <Box>
            <Flex justify="space-between">
                <IconButton
                aria-label="Save Note"
                size="xl"
                bg="gray.50"
                color="black"
                onClick={navi}
                _hover={{
                borderColor: "blackAlpha.500"
                }}
                ><IoMdArrowRoundBack /></IconButton>
                <Box p={4}
                    bg="gray.100"
                    borderRadius="10px"
                    border="1px "
                    borderColor="gray.400"
                >
                    <Flex gap="10px" alignItems="center">
                        <Box justifyItems="center" alignItems="center">
                            <Text fontWeight="semibold">Text Alignment</Text>
                            <Box justifyItems="center">
                                <Button bg="gray.100"_hover={{
                                    borderColor:"blackAlpha.500"
                                }} color="black" p={0} onClick={() => setAlign('left')}><CiTextAlignLeft/></Button>
                                <Button bg="gray.100"_hover={{
                                    borderColor:"blackAlpha.500"
                                }} color="black" p={0} onClick={() => setAlign('center')}><CiTextAlignCenter/></Button>
                                <Button bg="gray.100"_hover={{
                                    borderColor:"blackAlpha.500"
                                }} color="black" p={0} onClick={() => setAlign('right')}><CiTextAlignRight/></Button>
                                <Button bg="gray.100"_hover={{
                                    borderColor:"blackAlpha.500"
                                }} color="black" p={0} onClick={() => setAlign('justify')}><CiTextAlignJustify/></Button>
                            </Box>
                        </Box>
                        <Box>
                            <Color color={textColor} setColor={setTextColor} />
                        </Box>
                        <Box>
                            <Font font1={font1} setFont={setFont}/>
                        </Box>
                        <Box>
                            <Size size={size} setSize={setSize}/>
                        </Box>
                        <Box justifyItems="center" alignItems="center">
                            <Text fontWeight="semibold">Writing options</Text>
                            <Button bg="gray.100"_hover={{
                                borderColor:"blackAlpha.500"
                            }} color="black" onClick={()=>setFormatype('text')}><BsTextarea/></Button>

                            <Button bg="gray.100"_hover={{
                                borderColor:"blackAlpha.500"
                            }} color="black" onClick={()=>setFormatype('bullet_point')}><MdFormatListBulleted/></Button>

                            <Button bg="gray.100"_hover={{
                                borderColor:"blackAlpha.500"
                            }} color="black" onClick={()=>setFormatype('check_list')}><CiSquareCheck/></Button>
                        </Box>
                    </Flex>
                </Box>
               <IconButton
                aria-label="Save Note"
                size="xl"
                bg="gray.50"
                color="black"
                _hover={{
                    borderColor: "blackAlpha.500"
                }}
                onClick={handleSave}
                as={ReactRouterLink}
                to="/"
                ><IoIosSave /></IconButton>
            </Flex>
            <Input placeholder="Heading" size="lg" mt={6} mb={4} value={heading} onChange={(e)=>setHeading(e.target.value)}/>
            <Box h="500px" border="1px solid" borderColor="gray.200" borderRadius="md" p={4}>
                {renderNoteContent()}
            </Box>
        </Box>
    );
}

export default Notes;