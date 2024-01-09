import {SetterOrUpdater,selector,useRecoilState,useRecoilValue} from 'recoil'
import { textState } from '../recoil/recoil';

const CharacterCounter = () =>  {
    return (
        <div>
          <TextInput />
          <CharacterCount />
        </div>
      );
}

function TextInput() {
    const [text, setText]:[string, SetterOrUpdater<string>] = useRecoilState(textState);
  
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    );
  }

  const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textState);
  
      return text.length;
    },
  });


  function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
  }


export default CharacterCounter;