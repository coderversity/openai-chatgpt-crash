'use client';

import Loading from "../loading";

const Output = (props) => {
    const { contentType, results, loading } = props;

    return (
        <section className="output">
            {results?.data ? (
                <div className="h-screen">
                    {contentType === 'text' ? (
                        <p>{results?.data}</p>
                    ) : contentType === 'images' && (
                        <div className="grid grid-cols-2 gap-4">
                            {results.data?.map((imageUrl, index) => (
                                <div key={index}>
                                    <img src={imageUrl} alt='photo' />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : loading ? (
                <Loading />
            ) : results?.error ? (
                <p className="text-xl text-red-600">{results.error}</p>
            ) : (
                <p className="text-xl">Please select a content contentType.</p>
            )}
        </section>
    )
}

export default Output