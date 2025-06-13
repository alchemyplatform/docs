import Select from 'react-select'

type ThemeContext = 'control' | 'option'

// needed to avoid nested ternary operators
function getBgColor({
  isDark,
  context,
  isFocused = false,
  isSelected = false,
}: {
  isDark: boolean
  context: ThemeContext
  isFocused?: boolean
  isSelected?: boolean
}) {
  if (context === 'control') {
    if (isFocused) return isDark ? '#222222' : '#E8E8E8'
    return isDark ? '#383838' : '#F1F1F1'
  }
  if (context === 'option') {
    if (isSelected) return isDark ? '#111111' : '#FCFCFC'
    return isDark ? '#222222' : '#F1F1F1'
  }
  if (context === 'menu' || context === 'menuList') {
    return isDark ? '#222222' : '#F1F1F1'
  }
  return undefined
}

export const CodeblockSelect = ({
  isDark,
  options,
  selectedOption,
  onChange,
}: {
  isDark: boolean
  options: { value: string; label: string }[]
  selectedOption: string
  onChange: (value: string) => void
}) => {
  return (
    <Select
      styles={{
        control: (base, state) => ({
          ...base,
          backgroundColor: getBgColor({
            isDark,
            context: 'control',
            isFocused: state.isFocused,
          }),
          borderRadius: '6px',
          border: `1px solid ${isDark ? '#383838' : '#F1F1F1'}`,
          fontFamily: 'monospace',
          fontSize: '14px',
          minHeight: 'initial',
          padding: '3px 0px',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        container: (base) => ({
          ...base,
        }),
        singleValue: (base) => ({
          ...base,
          color: isDark ? '#EDEDED' : 'black',
          borderRadius: '6px',
        }),
        menu: (base) => ({
          ...base,
          width: 'max-content',
          minWidth: '100%',
          borderRadius: '6px',
          backgroundColor: isDark ? '#222222' : '#F1F1F1',
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: isDark ? '#EDEDED' : 'black',
          padding: '0px 2px',
        }),
        menuList: (base) => ({
          ...base,
          backgroundColor: isDark ? '#222222' : '#F1F1F1',
          padding: '4px',
          border: `1px solid ${isDark ? '#222222' : '#F1F1F1'}`,
          borderRadius: '6px',
          fontSize: '14px',
        }),
        option: (base, state) => ({
          ...base,
          padding: '4px 8px',
          fontFamily: 'monospace',
          borderRadius: '6px',
          backgroundColor: getBgColor({
            isDark,
            context: 'option',
            isSelected: state.isSelected,
          }),
          color: isDark ? '#EDEDED' : 'black',
          ':hover': {
            backgroundColor: isDark ? '#181818' : '#F6F6F6',
          },
          ':not(:first-of-type):not(:last-of-type)': {
            margin: '4px 0px',
          },
        }),
        valueContainer: (base) => ({
          ...base,
          paddingRight: '0px',
          textAlign: 'center',
        }),
      }}
      isSearchable={false}
      options={options}
      value={options.find((opt) => opt.value === selectedOption)}
      onChange={(opt) => {
        if (opt) {
          onChange(opt.value)
        }
      }}
    />
  )
}
