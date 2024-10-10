import Link from 'next/link';

const FinishButton = () => {
    return (
        <Link href="/finish">
            <button
                type="button"
                id="Finish-Button"
                className="bg-slate-100 w-24 h-6 rounded-sm Finish-Button"
            >
                Finish
            </button>
        </Link>
    );
}

export default FinishButton;
