import { useState } from 'react';
import { useUniqId as useBaseUniqId } from 'web-platform-alpha/libs/uniq-id';

/**
 * Реакт-хук для генерации уникального id.
 *
 * При использовании в проекте ssr необходимо использовать
 * `SSRProvider` для синхронизации id между сервером и клиентом.
 *
 * @param prefix - Префикс для генерации уникального id (по умолчанию `xuniq`)
 *
 * @example
 * const id = useUniqId()
 */
export function useUniqId(prefix?: string): string {
    const uniqId = useBaseUniqId();
    // NOTE: Не используем напрямую хук из web-platform для обратной совместимости,
    // так как там нет префиксов
    const [id] = useState(() => (prefix ? prefix + uniqId.replace('xuniq', '') : uniqId));

    return id;
}
