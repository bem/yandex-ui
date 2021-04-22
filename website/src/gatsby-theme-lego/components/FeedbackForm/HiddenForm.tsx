import React, { RefObject, FC, Fragment } from 'react';

type HiddenFormProps = {
    rating: number;
    slug: string;
    feedback: string;
    formRef: RefObject<HTMLFormElement>;
};

export const HiddenForm: FC<HiddenFormProps> = (props) => {
    const { rating, slug, feedback, formRef } = props;

    return (
        <Fragment>
            <form
                action="https://forms.yandex.net/surveys/69529/"
                target="my-frame"
                method="post"
                ref={formRef}
                style={{ display: 'none' }}
            >
                <input type="text" name="rating" defaultValue={rating} />
                <input type="text" name="slug" defaultValue={slug} />
                <input type="text" name="feedback" defaultValue={feedback} />
            </form>
            <iframe name="my-frame" style={{ display: 'none' }} />
        </Fragment>
    );
};
