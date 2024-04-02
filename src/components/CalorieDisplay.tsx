type CalorieDisplayProps = {
    calories: number;
    text: string;
};

export default function CalorieDisplay({ calories, text }: CalorieDisplayProps) {
    return (
        <div>
            <p className="text-center font-bold text-6xl text-white ">{calories}</p>
            <p className="text-center font-bold text-1xl text-white">{text}</p>
        </div>
    );
}
