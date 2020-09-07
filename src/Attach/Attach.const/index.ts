import { cn } from '@bem-react/classname';

export const cnAttach = cn('Attach');

/**
 * @internal
 */
export const extensionsMap: {
    [key in string]: any;
} = {
    '7z': 'archive',
    avi: 'avi',
    doc: 'doc',
    docx: 'doc',
    eml: 'eml',
    exe: 'exe',
    flv: 'video',
    gif: 'gif',
    gz: 'archive',
    jpeg: 'jpg',
    jpg: 'jpg',
    m4a: 'audio',
    mov: 'mov',
    mp3: 'mp3',
    mp4: 'mp4',
    ogg: 'audio',
    pdf: 'pdf',
    png: 'png',
    ppt: 'ppt',
    rar: 'archive',
    tar: 'archive',
    txt: 'txt',
    wav: 'wav',
    wma: 'wma',
    wmv: 'wmv',
    xls: 'xls',
    zip: 'archive',
};
