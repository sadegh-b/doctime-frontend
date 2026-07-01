interface Props {
  time: string
  disabled?: boolean
  onSelect: (time: string) => void
}

export default function TimeSlot({
  time,
  disabled,
  onSelect
}: Props) {

  return (

    <button
      disabled={disabled}
      onClick={() => onSelect(time)}
      className={`px-4 py-2 rounded-xl font-bold border
      ${
        disabled
          ? "bg-gray-200 text-gray-400"
          : "bg-white hover:bg-blue-600 hover:text-white"
      }`}
    >
      {time}
    </button>

  )
}
