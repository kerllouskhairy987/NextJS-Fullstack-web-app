import { Button } from './ui/button'

interface IProps {
    page: number
    totalPages: number
}

const Pagination = ({page, totalPages}: IProps) => {
    return (
        <div>
            <div className="flex justify-center items-center gap-2 my-6">
                <Button asChild variant={"outline"}>
                    <a
                        href={`/?page=${page - 1}`}
                        className={`${page === 1 ? "opacity-50 pointer-events-none" : ""}`}
                    >
                        Previous
                    </a>
                </Button>

                <span className="px-4 py-2 border border-gray-300 rounded-md bg-gray-200 dark:bg-gray-200 dark:text-black">
                    Page {page} / {totalPages}
                </span>

                <Button asChild variant={"outline"}>
                    <a
                        href={`/?page=${page + 1}`}
                        className={`${page >= totalPages ? "opacity-50 pointer-events-none" : ""}`}
                    >
                        Next
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default Pagination