import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {cn, getSubjectColor} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CompanionListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionList = ({title, companions, classNames}: CompanionListProps) => {
    return (
        <article className={cn('companion-list', classNames)}>
            <h2 className="font-bold text-3xl">Recent Sessions</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-lg w-2/3">Lessons</TableHead>
                        <TableHead className="text-lg">Subject</TableHead>
                        <TableHead className="text-lg">Duration</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions?.map(({id, subject, name, topic, duration}) => {
                        return (
                            <TableRow key={id}>
                                <TableCell>
                                    <Link href={`/companions/${id}`}>
                                        <div className="flex items-center gap-2">
                                            <div className="size-[72px]
                                            flex
                                            items-center
                                            justify-center
                                            rounded-lg
                                            max-md:hidden"
                                                 style={{backgroundColor: getSubjectColor(subject)}}>
                                                <Image
                                                    src={`/icons/${subject}.svg`}
                                                    alt={subject}
                                                    width={35}
                                                    height={35}/>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="font-bold text-2xl">
                                                    {name}
                                                </p>
                                                <p className="text-lg">
                                                    {topic}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <div className="subject-badge w-fit max-md:hidden">
                                        {subject}
                                    </div>
                                    <div
                                        className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                                        style={{backgroundColor:getSubjectColor(subject)}}>
                                        <Image
                                            src={`/icons/${subject}.svg`}
                                            alt={subject}
                                            width={18}
                                            height={18}
                                        ></Image>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2 w-full">
                                        <p className="text-2xs">
                                            {duration} {' '}
                                            <span className="hidden md:inline">min</span>
                                        </p>
                                        <Image
                                            className="md: hidden"
                                            src="/icons/clock.svg"
                                            alt="minutes"
                                            width={14}
                                            height={14}></Image>
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })};

                </TableBody>
            </Table>
        </article>
    );
};

export default CompanionList;